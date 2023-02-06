import { IUser } from 'src/user/user.interface';

export const removePasswordFromUser = (user: IUser) => {
  const newUser = { ...user };
  delete newUser.password;
  return newUser;
};
