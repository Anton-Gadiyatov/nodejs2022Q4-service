import {
  IsString,
  IsNotEmpty,
  IsNumber,
  ValidateIf,
  IsUUID,
} from 'class-validator';
import {
  EMPTY_FIELD_ERROR,
  NUMBER_FIELD_ERROR,
  STRING_FIELD_ERROR,
  UUID_FIELD_ERROR,
} from 'src/utils/constants';

export class CreateTrackDto {
  @IsString({ message: `name ${STRING_FIELD_ERROR}` })
  @IsNotEmpty({ message: `name ${EMPTY_FIELD_ERROR}` })
  name: string;

  @IsNumber({}, { message: `duration ${NUMBER_FIELD_ERROR}` })
  duration: number;

  @ValidateIf((o) => typeof o.artistId === null)
  @IsUUID(4, { message: `artistId ${UUID_FIELD_ERROR}` })
  artistId: string | null;

  @ValidateIf((o) => typeof o.albumId === null)
  @IsUUID(4, { message: `albumId ${UUID_FIELD_ERROR}` })
  albumId: string | null;
}
