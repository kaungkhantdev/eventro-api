import {
  Controller,
  Get,
  // Post,
  Body,
  // Patch,
  Param,
  Query,
  // Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Public } from '../../common/decorators/public.decorator';
// import { CreateEventDto } from './dto/create-event.dto';
// import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  // @Post()
  // create(@Body() createEventDto: CreateEventDto) {
  //   return this.eventsService.create(createEventDto);
  // }

  @Get()
  @Public()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.eventsService.findAll(page, limit);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
  //   return this.eventsService.update(+id, updateEventDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.eventsService.remove(+id);
  // }
}
