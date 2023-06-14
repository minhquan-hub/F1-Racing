import { Container } from 'inversify';
import TYPES from '../type';
import { IRaceService } from './interfaces';
import { RaceResultService } from './services';

const container = new Container();
container.bind<IRaceService>(TYPES.IRaceService).to(RaceResultService);

export { container };
