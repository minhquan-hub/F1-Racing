import { Container } from 'inversify';
import TYPES from '../type';
import { IRaceResultService, IRaceService } from './interfaces';
import { RaceResultService, RaceService } from './services';

const container = new Container();
container.bind<IRaceService>(TYPES.IRaceService).to(RaceService);
container
  .bind<IRaceResultService>(TYPES.IRaceResultService)
  .to(RaceResultService);

export { container };
