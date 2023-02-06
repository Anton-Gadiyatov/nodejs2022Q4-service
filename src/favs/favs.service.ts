import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import {
  ALBUM_ALREADY_EXIST,
  ALBUM_NOT_FOUND,
  ARTIST_ALREADY_EXIST,
  ARTIST_NOT_FOUND,
  TRACK_ALREADY_EXIST,
  TRACK_NOT_FOUND,
} from 'src/utils/constants';

@Injectable()
export class FavsService {
  getFavs() {
    // const tracks = DATABASE.favs.tracks.map((favTrack) => {
    //   return DATABASE.track.find((track) => track.id === favTrack);
    // });
    // const albums = DATABASE.favs.albums.map((favAlbum) => {
    //   return DATABASE.album.find((album) => album.id === favAlbum);
    // });
    // const artists = DATABASE.favs.artists.map((favArtist) => {
    //   return DATABASE.artist.find((artist) => artist.id === favArtist);
    // });
    // return {
    //   artists,
    //   albums,
    //   tracks,
    // };

    return DATABASE.favs;
  }

  addTrack(trackId) {
    if (DATABASE.favs.tracks.includes(trackId)) {
      throw new HttpException(TRACK_ALREADY_EXIST, HttpStatus.CREATED);
    }
    const track = DATABASE.track.find((track) => track.id === trackId);
    if (!track) {
      throw new HttpException(TRACK_NOT_FOUND, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    DATABASE.favs.tracks.push(track);
    return track;
  }

  deleteTrack(trackId) {
    const trackFavIndex = DATABASE.favs.tracks.findIndex(
      (track) => track.id === trackId,
    );
    if (trackFavIndex === -1) {
      throw new HttpException(TRACK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    DATABASE.favs.tracks.splice(trackFavIndex, 1);
  }

  addAlbum(albumId) {
    if (DATABASE.favs.albums.includes(albumId)) {
      throw new HttpException(ALBUM_ALREADY_EXIST, HttpStatus.CREATED);
    }
    const album = DATABASE.album.find((album) => album.id === albumId);
    if (!album) {
      throw new HttpException(ALBUM_NOT_FOUND, HttpStatus.UNPROCESSABLE_ENTITY);
    }
    DATABASE.favs.albums.push(album);
    return album;
  }

  deleteAlbum(albumId) {
    const albumFavIndex = DATABASE.favs.albums.findIndex(
      (album) => album.id === albumId,
    );
    if (albumFavIndex === -1) {
      throw new HttpException(ALBUM_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    DATABASE.favs.albums.splice(albumFavIndex, 1);
  }

  addArtist(artistId) {
    if (DATABASE.favs.artists.includes(artistId)) {
      throw new HttpException(ARTIST_ALREADY_EXIST, HttpStatus.CREATED);
    }
    const artist = DATABASE.artist.find((artist) => artist.id === artistId);
    if (!artist) {
      throw new HttpException(
        ARTIST_NOT_FOUND,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    DATABASE.favs.artists.push(artist);
    return artist;
  }

  deleteArtist(artistId) {
    const artistFavIndex = DATABASE.favs.artists.findIndex(
      (artist) => artist.id === artistId,
    );
    if (artistFavIndex === -1) {
      throw new HttpException(ARTIST_ALREADY_EXIST, HttpStatus.NOT_FOUND);
    }
    DATABASE.favs.artists.splice(artistFavIndex, 1);
  }
}
