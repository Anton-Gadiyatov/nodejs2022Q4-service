import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import { ARTIST_NOT_FOUND } from 'src/utils/constants';
import { Artist } from './artist.entity';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  getArtists() {
    return DATABASE.artist;
  }

  getArtistsById(id: string) {
    const artist = DATABASE.artist.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException(ARTIST_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  createArtist(artist: CreateArtistDto) {
    const newArtist = new Artist(artist);
    DATABASE.artist.push(newArtist);
    return newArtist;
  }

  updateArtist(id: string, updatedArtist: UpdateArtistDto) {
    const artist = DATABASE.artist.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException(ARTIST_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    artist.name = updatedArtist.name;
    artist.grammy = updatedArtist.grammy;

    return artist;
  }

  deleteArtist(id: string) {
    const artist = DATABASE.artist.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException(ARTIST_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    DATABASE.album.forEach((album) => {
      if (album.artistId === id) {
        album.artistId = null;
      }
    });

    const artistIndex = DATABASE.artist.findIndex((artist) => artist.id === id);
    DATABASE.artist.splice(artistIndex, 1);
  }
}
