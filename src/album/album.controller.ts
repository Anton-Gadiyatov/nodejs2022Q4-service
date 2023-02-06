import { Controller, Get, Param } from '@nestjs/common';
import { validateUuid } from 'src/utils/validateUuid';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get()
  getArtists() {
    return this.albumService.getAlbum();
  }

  @Get(':id')
  getArtistsById(@Param('id') id: string) {
    validateUuid(id);

    return this.albumService.getAlbumById(id);
  }

  // @UsePipes(new ValidationPipe())
  // @Post()
  // createArtist(@Body() artist: CreateArtistDto) {
  //   return this.albumService.createArtist(artist);
  // }

  // @UsePipes(new ValidationPipe())
  // @Put(':id')
  // updateArtist(
  //   @Param('id') id: string,
  //   @Body()
  //   updatedArtist: UpdateArtistDto,
  // ) {
  //   validateUuid(id);

  //   return this.albumService.updateArtist(id, updatedArtist);
  // }

  // @HttpCode(204)
  // @Delete(':id')
  // deleteArtist(@Param('id') id: string) {
  //   validateUuid(id);

  //   return this.albumService.deleteArtist(id);
  // }
}
