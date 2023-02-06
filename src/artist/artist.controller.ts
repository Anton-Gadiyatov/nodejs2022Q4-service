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
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get()
  getArtists() {
    return this.artistService.getArtists();
  }

  @Get(':id')
  getArtistsById(@Param('id') id: string) {
    validateUuid(id);

    return this.artistService.getArtistsById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createArtist(@Body() artist: CreateArtistDto) {
    return this.artistService.createArtist(artist);
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  updateArtist(
    @Param('id') id: string,
    @Body()
    updatedArtist: UpdateArtistDto,
  ) {
    validateUuid(id);

    return this.artistService.updateArtist(id, updatedArtist);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteArtist(@Param('id') id: string) {
    validateUuid(id);

    return this.artistService.deleteArtist(id);
  }
}
