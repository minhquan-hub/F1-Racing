import { Container } from 'inversify';
import TYPES from '../type';
import { IDriverService, IRaceResultService, IRaceService } from './interfaces';
import { DriverService, RaceResultService, RaceService } from './services';

const container = new Container();
container.bind<IRaceService>(TYPES.IRaceService).to(RaceService);
container
  .bind<IRaceResultService>(TYPES.IRaceResultService)
  .to(RaceResultService);
container.bind<IDriverService>(TYPES.IDriverService).to(DriverService);
export { container };
