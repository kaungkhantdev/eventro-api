import { Inject, Injectable } from '@nestjs/common';
import { EVENTS_REPOSITORY } from './constants';
import { IEventsRepository } from './repositories/events.repository.interface';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: IEventsRepository,
  ) {}

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [events, total] = await Promise.all([
      this.eventsRepository.findAll({ skip, take: limit }),
      this.eventsRepository.count(),
    ]);

    return {
      items: events,
      page,
      limit,
      total,
    };
  }

  async findOne(id: number) {
    return await this.eventsRepository.findById(id.toString());
  }
}
