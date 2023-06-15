import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
} from 'inversify-express-utils';
import TYPES from '../../type';
import { inject } from 'inversify';
import DriverValidator from '../validations/driver_validator';
import { IDriverService } from '../interfaces';
import { DriverCreateDto } from '../dtos';

@controller('/driver')
export class DriverController implements interfaces.Controller {
  private readonly _driverService;

  constructor(@inject(TYPES.IDriverService) driverService: IDriverService) {
    this._driverService = driverService;
  }

  @httpGet('')
  async getAllDrivers(req: Request, res: Response) {
    const drivers = await this._driverService.getAllDrivers();
    return res.status(StatusCodes.OK).json(drivers);
  }

  @httpPost('', DriverValidator.postCreateValidation)
  async postCreateDriver(req: Request, res: Response) {
    const driver: DriverCreateDto = req.body;
    const driverCreate = await this._driverService.createDriver(driver);
    return res.status(StatusCodes.OK).json(driverCreate);
  }
}
