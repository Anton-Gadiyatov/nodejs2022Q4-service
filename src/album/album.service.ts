import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import { ALBUM_NOT_FOUND } from 'src/utils/constants';

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

  // createArtist(artist: CreateArtistDto) {
  //   const newArtist = new Artist(artist);
  //   DATABASE.artist.push(newArtist);
  //   return newArtist;
  // }

  // updateArtist(id: string, updatedArtist: UpdateArtistDto) {
  //   const artist = DATABASE.artist.find((artist) => artist.id === id);
  //   if (!artist) {
  //     throw new HttpException(ARTIST_NOT_FOUND, HttpStatus.NOT_FOUND);
  //   }

  //   artist.name = updatedArtist.name;
  //   artist.grammy = updatedArtist.grammy;

  //   return artist;
  // }

  // deleteArtist(id: string) {
  //   const artist = DATABASE.artist.find((artist) => artist.id === id);
  //   if (!artist) {
  //     throw new HttpException(ARTIST_NOT_FOUND, HttpStatus.NOT_FOUND);
  //   }
  //   const artistIndex = DATABASE.artist.findIndex((artist) => artist.id === id);
  //   DATABASE.artist.splice(artistIndex, 1);
  // }
}
