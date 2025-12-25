import { GenericRepository } from '@/shared/repositories';
import { Injectable } from '@nestjs/common';
import { IEventsRepository } from './events.repository.interface';
import { PrismaService } from '@/database/prisma.service';
import { Event as EventModel, Prisma } from 'generated/prisma/client';

@Injectable()
export class EventsRepository
  extends GenericRepository<EventModel>
  implements IEventsRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, Prisma.ModelName.Event);
  }

  async findByTitle(title: string): Promise<EventModel | null> {
    return await this.model.findUnique({
      where: { title },
    });
  }
}
