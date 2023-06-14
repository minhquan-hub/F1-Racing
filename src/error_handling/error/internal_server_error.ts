import BaseError from '../base_error';
import { StatusCodes } from 'http-status-codes';

export class InternalServerError extends BaseError {
  constructor() {
    super(StatusCodes.INTERNAL_SERVER_ERROR, true, 'Internal Server Error.');
  }
}
