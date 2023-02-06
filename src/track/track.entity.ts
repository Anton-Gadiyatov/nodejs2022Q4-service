import { v4 as uuidv4 } from 'uuid';
import { CreateTrackDto } from './dto/create-track.dto';
import { ITrack } from './track.interface';

export class Track implements ITrack {
  id: string = uuidv4();
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;

  constructor(track: CreateTrackDto) {
    this.name = track.name;
    this.artistId = track.artistId;
    this.albumId = track.albumId;
    this.duration = track.duration;
  }
}
