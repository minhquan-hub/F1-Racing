import BaseError from '../base_error';
import { StatusCodes } from 'http-status-codes';

class InternalServerError extends BaseError {
  constructor() {
    super(StatusCodes.INTERNAL_SERVER_ERROR, true, 'internal server error');
  }
}

export default InternalServerError;
