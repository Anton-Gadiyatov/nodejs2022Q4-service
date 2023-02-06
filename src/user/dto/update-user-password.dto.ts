import { IsString, IsNotEmpty } from 'class-validator';
import { EMPTY_FIELD_ERROR, STRING_FIELD_ERROR } from 'src/utils/constants';

export class UpdatePasswordDto {
  @IsString({ message: `oldPassword ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `oldPassword ${EMPTY_FIELD_ERROR}` })
  oldPassword: string;

  @IsString({ message: `newPassword ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `newPassword ${EMPTY_FIELD_ERROR}` })
  newPassword: string;
}
