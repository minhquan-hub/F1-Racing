import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import 'reflect-metadata';
import { IRaceService } from '../interfaces';
import TYPES from '../../type';
import { inject } from 'inversify';
import RaceValidator from '../validations/race_validator';
import { RaceYearGrandPrixRequestDto } from '../dtos';

@controller('/race')
export class RaceController implements interfaces.Controller {
  private readonly _raceService: IRaceService;

  constructor(@inject(TYPES.IRaceService) raceService: IRaceService) {
    this._raceService = raceService;
  }

  @httpGet('', RaceValidator.getAllRacesValidation)
  async getAllRaces(req: Request, res: Response) {
    const raceQuery: RaceYearGrandPrixRequestDto = req['query'];
    const races = await this._raceService.getAllRaces(raceQuery);
    return res.status(StatusCodes.OK).json(races);
  }

  @httpGet('/:raceId', RaceValidator.getAllRacesByIdValidation)
  async getRacesById(req: Request, res: Response) {
    const { raceId } = req['params'];
    const races = await this._raceService.getRacesById(Number(raceId));
    return res.status(StatusCodes.OK).json(races);
  }
}
