import BaseError from '../base_error';
import { StatusCodes } from 'http-status-codes';

export class Http400Error extends BaseError {
  constructor() {
    super(StatusCodes.BAD_REQUEST, true, 'Bad Request.');
  }
}
