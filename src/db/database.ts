import { User } from 'src/user/user.interface';

interface Database {
  user: User[];
}
export const DATABASE: Database = {
  user: [
    {
      id: 'string',
      login: 'string',
      password: 'string',
      version: 1,
      createdAt: 2,
      updatedAt: 3,
    },
  ],
};
