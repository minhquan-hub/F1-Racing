import { RaceResultDto } from './race_result';

export interface DriverRaceResultDto {
  driverId: number;
  fullName: string;
  no: number;
  raceResult: RaceResultDto[];
}
