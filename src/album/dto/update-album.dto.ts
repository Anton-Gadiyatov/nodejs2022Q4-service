import { IsString, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';
import {
  NUMBER_FIELD_ERROR,
  EMPTY_FIELD_ERROR,
  STRING_FIELD_ERROR,
} from 'src/utils/constants';

export class UpdateAlbumDto {
  @IsString({ message: `name ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `name ${EMPTY_FIELD_ERROR}` })
  name: string;

  @IsNumber({}, { message: `year ${NUMBER_FIELD_ERROR}` })
  year: number;

  @ValidateIf((o) => typeof o.artistId === null)
  @IsString({ message: `artistId ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `artistId ${EMPTY_FIELD_ERROR}` })
  artistId: string | null;
}
