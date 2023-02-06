import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { v4 as uuidv4, validate } from 'uuid';
import { NOT_VALID_UUID } from 'src/utils/constants';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getTasks() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    if (!validate(id)) {
      throw new HttpException(NOT_VALID_UUID, HttpStatus.BAD_REQUEST);
    }
    return this.userService.getUserById(id);
  }

  // @Post()
  // createTask(@Body('task') task: string): ITask {
  //   return this.taskService.createTask(task);
  // }
}
