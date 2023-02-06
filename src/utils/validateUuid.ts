import { validate } from 'uuid';
import { NOT_VALID_UUID } from 'src/utils/constants';
import { HttpException, HttpStatus } from '@nestjs/common';

export const validateUuid = (id: string) => {
  if (!validate(id)) {
    throw new HttpException(NOT_VALID_UUID, HttpStatus.BAD_REQUEST);
  }
};
