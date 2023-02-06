import { IAlbum } from 'src/album/album.interface';
import { IArtist } from 'src/artist/artist.interface';
import { ITrack } from 'src/track/track.interface';
import { IUser } from 'src/user/user.interface';

interface Database {
  user: IUser[];
  artist: IArtist[];
  album: IAlbum[];
  track: ITrack[];
  favs: {
    artists: IArtist[];
    albums: IAlbum[];
    tracks: ITrack[];
  };
}
export const DATABASE: Database = {
  user: [],
  artist: [],
  album: [],
  track: [],
  favs: {
    artists: [],
    albums: [],
    tracks: [],
  },
};
