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
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get()
  getAlbum() {
    return this.albumService.getAlbum();
  }

  @Get(':id')
  getAlbumById(@Param('id') id: string) {
    validateUuid(id);

    return this.albumService.getAlbumById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createAlbum(@Body() album: CreateAlbumDto) {
    return this.albumService.createAlbum(album);
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  updateAlbum(
    @Param('id') id: string,
    @Body()
    updatedAlbum: UpdateAlbumDto,
  ) {
    validateUuid(id);

    return this.albumService.updateAlbum(id, updatedAlbum);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteAlbum(@Param('id') id: string) {
    validateUuid(id);

    return this.albumService.deleteAlbum(id);
  }
}
