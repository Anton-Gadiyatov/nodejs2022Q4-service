import {
  Body,
  Controller,
  Get,
  Put,
  HttpException,
  HttpStatus,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { validate } from 'uuid';
import { NOT_VALID_UUID } from 'src/utils/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UsePipes } from '@nestjs/common/decorators';
import { UpdatePasswordDto } from './dto/update-user-password.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    if (!validate(id)) {
      throw new HttpException(NOT_VALID_UUID, HttpStatus.BAD_REQUEST);
    }
    return this.userService.getUserById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  updateUserPassword(
    @Param('id') id: string,
    @Body()
    updatedUser: UpdatePasswordDto,
  ) {
    return this.userService.updateUserPassword(id, updatedUser);
  }
}
