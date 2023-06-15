import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { InternalServerError } from '../error_handling';

class RaceResultValidator {
  async getDriverRaceResultValidation(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      await check('year')
        .isLength({ min: 4, max: 4 })
        .withMessage('The year length must be 4 character')
        .notEmpty()
        .withMessage('The year is not null')
        .matches('^[0-9]*$')
        .withMessage('The year must be valid')
        .run(req);

      await check('driverId')
        .notEmpty()
        .withMessage('The driverId is not null')
        .matches('^[0-9]*$')
        .withMessage('The driverId must be valid')
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

  async getDriverPositionValidation(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      await check('raceId')
        .notEmpty()
        .withMessage('The raceId is not null')
        .matches('^[0-9]*$')
        .withMessage('The raceId must be valid')
        .run(req);

      await check('pos')
        .notEmpty()
        .withMessage('The pos is not null')
        .matches('^[0-9]*$')
        .withMessage('The pos must be valid')
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

export default new RaceResultValidator();
