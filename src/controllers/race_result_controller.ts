import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import 'reflect-metadata';
import TYPES from '../../type';
import { inject } from 'inversify';
import RaceResultValidator from '../validations/race_result_validator';
import { IRaceResultService } from '../interfaces';

@controller('/race-result')
export class RaceResultController implements interfaces.Controller {
  private readonly _raceResultService;

  constructor(
    @inject(TYPES.IRaceResultService) raceResultService: IRaceResultService,
  ) {
    this._raceResultService = raceResultService;
  }

  @httpGet('/driver', RaceResultValidator.getDriverRaceResultValidation)
  async getDriverRaceResultByYear(req: Request, res: Response) {
    const { year, driverId } = req.query;
    const driverRaceResult =
      await this._raceResultService.getDriverRaceResultByYear(year, driverId);
    return res.status(StatusCodes.OK).json(driverRaceResult);
  }

  @httpGet('/position', RaceResultValidator.getDriverPositionValidation)
  async getDriverPosition(req: Request, res: Response) {
    const { raceId, pos } = req.query;
    const driverPosition = await this._raceResultService.getDriverPosition(
      raceId,
      pos,
    );
    return res.status(StatusCodes.OK).json(driverPosition);
  }
}
