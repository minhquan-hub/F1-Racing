import BaseError from '../base_error';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends BaseError {
  constructor() {
    super(StatusCodes.NOT_FOUND, true, 'Not Found.');
  }
}
