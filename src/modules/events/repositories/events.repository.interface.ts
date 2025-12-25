import { Event } from 'generated/prisma/client';
import { IRepository } from '@/shared/repositories/interfaces';

export interface IEventsRepository extends IRepository<Event> {
  findByTitle(title: string): Promise<Event | null>;
}
