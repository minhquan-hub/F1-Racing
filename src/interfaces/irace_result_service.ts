import { DriverPositionDto, DriverRaceResultDto } from '../dtos';

export interface IRaceResultService {
  getDriverRaceResultByYear(
    year: number,
    driverId: number,
  ): Promise<DriverRaceResultDto>;
  getDriverPosition(raceId: number, pos: number): Promise<DriverPositionDto>;
}
