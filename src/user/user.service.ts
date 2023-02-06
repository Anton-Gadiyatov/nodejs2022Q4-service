import { Injectable } from '@nestjs/common';
import { DATABASE } from 'src/db/database';
// import { User } from './user.interface';

@Injectable()
export class UserService {
  getUsers() {
    return DATABASE.user;
  }

  getUserById(id: string) {
    return DATABASE.user.find((user) => user.id === id);
  }

  // createTask(task: string): ITask {
  //   const newTask = new Task(task);
  //   this.tasks.push(newTask);
  //   return newTask;
  // }
}
