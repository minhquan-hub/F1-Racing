import { type StatusCodes } from 'http-status-codes';

class BaseError extends Error {
  public readonly name: string;
  public readonly status!: StatusCodes;
  public readonly isOperational: boolean;

  constructor(
    status: StatusCodes,
    isOperational: boolean,
    description: string,
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.status = status;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export default BaseError;
