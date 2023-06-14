import { DriverRaceResultDto } from '../dtos';

export interface IRaceResultService {
  getDriverRaceResultByYear(
    year: number,
    driverId: number,
  ): Promise<DriverRaceResultDto>;
}
