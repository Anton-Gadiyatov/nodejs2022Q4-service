import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { validateUuid } from 'src/utils/validateUuid';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Get()
  getTrack() {
    return this.trackService.getTrack();
  }

  @Get(':id')
  getTrackById(@Param('id') id: string) {
    validateUuid(id);

    return this.trackService.getTrackById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createTrack(@Body() track: CreateTrackDto) {
    return this.trackService.createTrack(track);
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  updateTrack(
    @Param('id') id: string,
    @Body()
    updateTrack: UpdateTrackDto,
  ) {
    validateUuid(id);

    return this.trackService.updateTrack(id, updateTrack);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteTrack(@Param('id') id: string) {
    validateUuid(id);

    return this.trackService.deleteTrack(id);
  }
}
