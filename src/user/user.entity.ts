import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './user.interface';
import { v4 as uuidv4 } from 'uuid';

export class User implements IUser {
  id: string = uuidv4();
  login: string;
  password: string;
  version = 1;
  createdAt: number = new Date().getTime();
  updatedAt: number = new Date().getTime();
  constructor(user: CreateUserDto) {
    this.login = user.login;
    this.password = user.password;
  }
}
