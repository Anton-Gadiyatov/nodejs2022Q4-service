import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { validateUuid } from 'src/utils/validateUuid';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(private favsService: FavsService) {}
  @Get()
  getFavs() {
    return this.favsService.getFavs();
  }

  @Post('track/:id')
  addTrack(@Param('id') trackId: string) {
    validateUuid(trackId);
    return this.favsService.addTrack(trackId);
  }

  @HttpCode(204)
  @Delete('track/:id')
  deleteTrack(@Param('id') trackId: string) {
    validateUuid(trackId);
    return this.favsService.deleteTrack(trackId);
  }

  @Post('album/:id')
  addAlbum(@Param('id') albumId: string) {
    validateUuid(albumId);
    return this.favsService.addAlbum(albumId);
  }

  @HttpCode(204)
  @Delete('album/:id')
  deleteAlbum(@Param('id') albumId: string) {
    validateUuid(albumId);
    return this.favsService.deleteAlbum(albumId);
  }

  @Post('artist/:id')
  addArtist(@Param('id') artistId: string) {
    validateUuid(artistId);
    return this.favsService.addArtist(artistId);
  }

  @HttpCode(204)
  @Delete('artist/:id')
  deleteArtist(@Param('id') artistId: string) {
    validateUuid(artistId);
    return this.favsService.deleteArtist(artistId);
  }
}
