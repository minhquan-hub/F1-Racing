import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { InternalServerError } from '../error_handling';

class DriverValidator {
  async postCreateValidation(req: Request, res: Response, next: NextFunction) {
    try {
      await check('fullName')
        .notEmpty()
        .withMessage('The fullName is not null')
        .matches('^[A-Za-z]+$')
        .withMessage('The fullName must be valid')
        .run(req);

      await check('no')
        .notEmpty()
        .withMessage('The no is not null')
        .matches('^[0-9]*$')
        .withMessage('The no must be valid')
        .run(req);

      await check('teamId')
        .notEmpty()
        .withMessage('The teamId is not null')
        .matches('^[0-9]*$')
        .withMessage('The teamId must be valid')
        .run(req);

      await check('dateOfBirth')
        .notEmpty()
        .withMessage('The country is not null')
        .run(req);

      await check('country')
        .notEmpty()
        .withMessage('The country is not null')
        .matches('^[A-Za-z_ ]+$')
        .withMessage('The country must be valid')
        .run(req);

      await check('placeOfBirth')
        .notEmpty()
        .withMessage('The placeOfBirth is not null')
        .matches('^[A-Za-z ,:/\\-]*$')
        .withMessage('The placeOfBirth must be valid')
        .run(req);

      await check('rank')
        .notEmpty()
        .withMessage('The rank is not null')
        .matches('^[0-9]*$')
        .withMessage('The rank must be valid')
        .run(req);

      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errors: result.array() });
      } else {
        next();
      }
    } catch (error) {
      throw new InternalServerError();
    }
  }
}

export default new DriverValidator();
