import { injectable } from 'inversify';
import { IRaceResultService } from '../interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { DriverPositionDto, DriverRaceResultDto, RaceResultDto } from '../dtos';
import { NotFoundError } from '../error_handling';

@injectable()
export class RaceResultService implements IRaceResultService {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }

  async getDriverRaceResultByYear(
    year: number,
    driverId: number,
  ): Promise<DriverRaceResultDto> {
    const driverRaceResult: any = await this._prisma
      .$queryRaw(Prisma.sql`SELECT * FROM race_result AS rr
    JOIN race AS r ON r.id = rr.race_id 
    JOIN driver AS d ON d.id = rr.driver_id 
    WHERE rr.driver_id = ${driverId} AND YEAR(r.race_date) = ${year}`);

    if (driverRaceResult.length === 0) {
      throw new NotFoundError();
    }

    const driverRaceResultDto: DriverRaceResultDto =
      this.customDriverRaceResult(driverRaceResult);

    return driverRaceResultDto;
  }

  async getDriverPosition(
    raceId: number,
    pos: number,
  ): Promise<DriverPositionDto> {
    const driverPosition: any = await this._prisma
      .$queryRaw(Prisma.sql`SELECT * FROM driver AS d
      JOIN race_result AS rr ON rr.driver_id = d.id
      JOIN race AS r ON r.id = rr.race_id
      WHERE rr.race_id = ${raceId} AND rr.pos = ${pos}`);

    if (driverPosition.length === 0) {
      throw new NotFoundError();
    }

    const driverPositionDto: DriverPositionDto = {
      driverId: driverPosition[0].driver_id,
      fullName: driverPosition[0].full_name,
      no: driverPosition[0].no,
      car: driverPosition[0].car,
      pos: driverPosition[0].pos,
      grandPrix: driverPosition[0].grand_prix,
      raceDate: driverPosition[0].race_date,
      pts: driverPosition[0].pts,
      laps: driverPosition[0].laps,
      time: new Date(Number(driverPosition[0].time))
        .toISOString()
        .slice(11, 23),
    };

    return driverPositionDto;
  }

  customDriverRaceResult(driverRaceResult: any): DriverRaceResultDto {
    const raceResultDto: RaceResultDto[] = [];

    driverRaceResult.forEach((raceResult) => {
      raceResultDto.push({
        car: raceResult.car,
        pos: raceResult.pos,
        grandPrix: raceResult.grand_prix,
        raceDate: raceResult.race_date,
        pts: raceResult.pts,
        laps: raceResult.laps,
        time: new Date(Number(raceResult.time)).toISOString().slice(11, 23),
      });
    });

    const driverRaceResultDto: DriverRaceResultDto = {
      driverId: driverRaceResult[0].driver_id,
      fullName: driverRaceResult[0].full_name,
      no: driverRaceResult[0].no,
      raceResult: raceResultDto,
    };

    return driverRaceResultDto;
  }
}
