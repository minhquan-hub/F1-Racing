import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { InternalServerError } from '../error_handling';

class DriverValidator {
  async postCreateValidation(req: Request, res: Response, next: NextFunction) {
    try {
      await check('fullName')
        .notEmpty()
        .matches('^[A-Za-z]+$')
        .withMessage('The fullName must be valid')
        .run(req);

      await check('no')
        .notEmpty()
        .matches('^[0-9]*$')
        .withMessage('The no must be valid')
        .run(req);

      await check('teamId')
        .notEmpty()
        .matches('^[0-9]*$')
        .withMessage('The teamId must be valid')
        .run(req);

      await check('dateOfBirth')
        .notEmpty()
        .withMessage('The country must be valid')
        .run(req);

      await check('country')
        .matches('^[A-Za-z]+$')
        .withMessage('The country must be valid')
        .run(req);

      await check('placeOfBirth')
        .matches('^[A-Za-z]+$')
        .withMessage('The placeOfBirth must be valid')
        .run(req);

      await check('rank')
        .notEmpty()
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
