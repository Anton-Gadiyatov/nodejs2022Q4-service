import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
import { OLD_PASSWORD_ERROR, USER_NOT_FOUND } from 'src/utils/constants';
import { removePasswordFromUser } from 'src/utils/removePasswordFromUser';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-user-password.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  getUsers() {
    const usersWithOutPasswords = DATABASE.user.map((user) => {
      return removePasswordFromUser(user);
    });
    return usersWithOutPasswords;
  }

  getUserById(id: string) {
    const user = DATABASE.user.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const usersWithOutPassword = removePasswordFromUser(user);
    return usersWithOutPassword;
  }

  createUser(user: CreateUserDto) {
    const newUser = new User(user);
    DATABASE.user.push(newUser);
    const usersWithOutPassword = removePasswordFromUser(newUser);
    return usersWithOutPassword;
  }

  updateUserPassword(id: string, updatedUser: UpdatePasswordDto) {
    const user = DATABASE.user.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    if (user.password !== updatedUser.oldPassword) {
      throw new HttpException(OLD_PASSWORD_ERROR, HttpStatus.FORBIDDEN);
    }
    user.password = updatedUser.newPassword;
    user.version += 1;
    user.updatedAt = new Date().getTime();

    const usersWithOutPassword = removePasswordFromUser(user);
    return usersWithOutPassword;
  }

  deleteUser(id: string) {
    const user = DATABASE.user.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const userIndex = DATABASE.user.findIndex((user) => user.id === id);
    DATABASE.user.splice(userIndex, 1);
  }
}
