import { v4 as uuidv4 } from 'uuid';
import { IAlbum } from './album.interface';
import { CreateAlbumDto } from './dto/create-album.dto';

export class Album implements IAlbum {
  id: string = uuidv4();
  name: string;
  year: number;
  artistId: string | null;

  constructor(album: CreateAlbumDto) {
    this.name = album.name;
    this.year = album.year;
    this.artistId = album.artistId;
  }
}
