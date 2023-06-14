import { injectable } from 'inversify';
import { IRaceResultService } from '../interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { DriverRaceResultDto, RaceResultDto } from '../dtos';
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
    const raceResultDto: RaceResultDto[] = [];

    const driverRaceResult: any = await this._prisma
      .$queryRaw(Prisma.sql`SELECT * FROM race_result AS rr
    JOIN race AS r ON r.id = rr.race_id 
    JOIN driver AS d ON d.id = rr.driver_id WHERE rr.driver_id = ${driverId} AND YEAR(r.race_date) = ${year}`);

    if (driverRaceResult.length === 0) {
      throw new NotFoundError();
    }

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
