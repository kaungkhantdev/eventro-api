import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsRepository } from './repositories/events.repository';
import { EVENTS_REPOSITORY } from './constants';

@Module({
  controllers: [EventsController],
  providers: [
    EventsService,
    {
      provide: EVENTS_REPOSITORY,
      useClass: EventsRepository,
    },
  ],
})
export class EventsModule {}
