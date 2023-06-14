import BaseError from '../base_error';
import { StatusCodes } from 'http-status-codes';

class Http400Error extends BaseError {
  constructor() {
    super(StatusCodes.BAD_REQUEST, true, 'Bad Request');
  }
}

export default Http400Error;
