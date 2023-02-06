import {
  Body,
  Controller,
  Get,
  Put,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Delete, HttpCode, UsePipes } from '@nestjs/common/decorators';
import { UpdatePasswordDto } from './dto/update-user-password.dto';
import { validateUuid } from 'src/utils/validateUuid';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    validateUuid(id);

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
    validateUuid(id);

    return this.userService.updateUserPassword(id, updatedUser);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    validateUuid(id);

    return this.userService.deleteUser(id);
  }
}
