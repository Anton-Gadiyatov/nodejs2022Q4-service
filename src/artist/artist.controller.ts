import { Controller, Get, Param } from '@nestjs/common';
import { validateUuid } from 'src/utils/validateUuid';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get()
  getArtists() {
    return this.artistService.getArtists();
  }

  @Get(':id')
  getArtistsById(@Param('id') id: string) {
    validateUuid(id);

    return this.artistService.getArtistsById(id);
  }

  // @UsePipes(new ValidationPipe())
  // @Post()
  // createUser(@Body() user: CreateUserDto) {
  //   return this.userService.createUser(user);
  // }

  // @UsePipes(new ValidationPipe())
  // @Put(':id')
  // updateUserPassword(
  //   @Param('id') id: string,
  //   @Body()
  //   updatedUser: UpdatePasswordDto,
  // ) {
  //   validateUuid(id);

  //   return this.userService.updateUserPassword(id, updatedUser);
  // }

  // @HttpCode(204)
  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   validateUuid(id);

  //   return this.userService.deleteUser(id);
  // }
}
