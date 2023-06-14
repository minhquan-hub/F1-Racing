import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

class RaceValidator {
  async GetAllRacesValidation(req: Request, res: Response, next: NextFunction) {
    try {
      await check('year')
        .isLength({ min: 4, max: 4 })
        .withMessage('The year length must be 4 character')
        .matches('^[0-9]*$')
        .withMessage('The year must be valid')
        .run(req);

      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errors: result.array() });
      } else {
        next();
      }
    } catch (error) {}
  }
}

export default new RaceValidator();
