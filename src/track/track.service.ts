import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import { TRACK_NOT_FOUND } from 'src/utils/constants';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './track.entity';

@Injectable()
export class TrackService {
  getTrack() {
    return DATABASE.track;
  }

  getTrackById(id: string) {
    const track = DATABASE.track.find((track) => track.id === id);
    if (!track) {
      throw new HttpException(TRACK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return track;
  }

  createTrack(track: CreateTrackDto) {
    const newTrack = new Track(track);
    DATABASE.track.push(newTrack);
    return newTrack;
  }

  updateTrack(id: string, updatedTrack: UpdateTrackDto) {
    const track = DATABASE.track.find((track) => track.id === id);
    if (!track) {
      throw new HttpException(TRACK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    track.name = updatedTrack.name;
    track.duration = updatedTrack.duration;
    track.artistId = updatedTrack.artistId;
    track.albumId = updatedTrack.albumId;

    return track;
  }

  deleteTrack(id: string) {
    const track = DATABASE.track.find((track) => track.id === id);
    if (!track) {
      throw new HttpException(TRACK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const trackFavIndex = DATABASE.favs.tracks.findIndex(
      (track) => track === id,
    );
    DATABASE.favs.tracks.splice(trackFavIndex, 1);
    const trackIndex = DATABASE.track.findIndex((track) => track.id === id);
    DATABASE.track.splice(trackIndex, 1);
  }
}
