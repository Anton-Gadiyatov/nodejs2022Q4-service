import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import { ALBUM_NOT_FOUND } from 'src/utils/constants';
import { Album } from './album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService {
  getAlbum() {
    return DATABASE.album;
  }

  getAlbumById(id: string) {
    const album = DATABASE.album.find((album) => album.id === id);
    if (!album) {
      throw new HttpException(ALBUM_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return album;
  }

  createAlbum(album: CreateAlbumDto) {
    const newAlbum = new Album(album);
    DATABASE.album.push(newAlbum);
    return newAlbum;
  }

  updateAlbum(id: string, updatedAlbum: UpdateAlbumDto) {
    const album = DATABASE.album.find((album) => album.id === id);
    if (!album) {
      throw new HttpException(ALBUM_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    album.name = updatedAlbum.name;
    album.year = updatedAlbum.year;
    album.artistId = updatedAlbum.artistId;

    return album;
  }

  deleteAlbum(id: string) {
    const album = DATABASE.album.find((album) => album.id === id);
    if (!album) {
      throw new HttpException(ALBUM_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const albumIndex = DATABASE.album.findIndex((album) => album.id === id);
    DATABASE.album.splice(albumIndex, 1);
  }
}
