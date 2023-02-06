import { v4 as uuidv4 } from 'uuid';
import { IArtist } from './artist.interface';
import { CreateArtistDto } from './dto/create-artist.dto';

export class Artist implements IArtist {
  id: string = uuidv4();
  name: string;
  grammy: boolean;

  constructor(artist: CreateArtistDto) {
    this.name = artist.name;
    this.grammy = artist.grammy;
  }
}
