import { IAlbum } from 'src/album/album.interface';
import { IArtist } from 'src/artist/artist.interface';
import { ITrack } from 'src/track/track.interface';

export interface FavoritesRepsonse {
  artists: IArtist[];
  albums: IAlbum[];
  tracks: ITrack[];
}
