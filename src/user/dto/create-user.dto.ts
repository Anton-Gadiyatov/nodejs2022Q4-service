import { IsString, IsNotEmpty } from 'class-validator';
import { EMPTY_FIELD_ERROR, STRING_FIELD_ERROR } from 'src/utils/constants';

export class CreateUserDto {
  @IsString({ message: `login ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `login ${EMPTY_FIELD_ERROR}` })
  login: string;

  @IsString({ message: `password ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `password ${EMPTY_FIELD_ERROR}` })
  password: string;
}
