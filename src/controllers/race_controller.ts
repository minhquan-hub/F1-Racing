import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { controller, httpGet, type interfaces } from 'inversify-express-utils';
import 'reflect-metadata';
import { IRaceService } from '../interfaces';
import TYPES from '../../type';
import { inject } from 'inversify';
import RaceValidator from '../validations/race_validator';
import { RaceYearGrandPrixRequestDto } from '../dtos';

@controller('/race')
export class RaceResultController implements interfaces.Controller {
  private readonly _raceResultService: IRaceService;

  constructor(@inject(TYPES.IRaceService) raceResultService: IRaceService) {
    this._raceResultService = raceResultService;
  }

  @httpGet('', RaceValidator.GetAllRacesValidation)
  async getAllRaces(req: Request, res: Response) {
    const raceQuery: RaceYearGrandPrixRequestDto = req['query'];
    const races = await this._raceResultService.getAllRaces(raceQuery);
    return res.status(StatusCodes.OK).json(races);
  }
}
