import { IArtist } from 'src/artist/artist.interface';
import { IUser } from 'src/user/user.interface';

interface Database {
  user: IUser[];
  artist: IArtist[];
}
export const DATABASE: Database = {
  user: [
    // {
    //   id: 'c29df767-1f3f-4bd1-93ee-6c2754d467fb',
    //   login: 'string',
    //   password: 'string',
    //   version: 1,
    //   createdAt: new Date().getTime(),
    //   updatedAt: new Date().getTime(),
    // },
  ],
  artist: [
    {
      id: 'c29df767-1f3f-4bd1-93ee-6c2754d467fb',
      name: 'string',
      grammy: true,
    },
  ],
};
