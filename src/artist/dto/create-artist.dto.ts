import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import {
  BOOLEAN_FIELD_ERROR,
  EMPTY_FIELD_ERROR,
  STRING_FIELD_ERROR,
} from 'src/utils/constants';

export class CreateArtistDto {
  @IsString({ message: `name ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `name ${EMPTY_FIELD_ERROR}` })
  name: string;

  @IsBoolean({ message: `grammy ${BOOLEAN_FIELD_ERROR}` })
  grammy: boolean;
}
