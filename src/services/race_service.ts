import { injectable } from 'inversify';
import { IRaceService } from '../interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { RaceDto, RaceYearGrandPrixRequestDto } from '../dtos';
import { NotFoundError } from '../error_handling';

@injectable()
export class RaceService implements IRaceService {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }

  async getAllRaces(
    raceQuery: RaceYearGrandPrixRequestDto,
  ): Promise<RaceDto[]> {
    const raceDtos: RaceDto[] = [];

    const conditions: Prisma.Sql[] = [];
    if (raceQuery.year) {
      conditions.push(Prisma.sql`YEAR(r.race_date) = ${raceQuery.year}`);
    }

    if (raceQuery.grandPrix) {
      conditions.push(Prisma.sql`r.grand_prix = ${raceQuery.grandPrix}`);
    }

    const where = conditions.length
      ? Prisma.sql`where ${Prisma.join(conditions, ' and ')}`
      : Prisma.empty;

    const races: any[] = await this._prisma
      .$queryRaw(Prisma.sql`SELECT * FROM race AS r   
        JOIN race_result AS rr ON rr.race_id = r.id AND pos = 1
        LEFT JOIN driver AS d ON d.id = rr.driver_id ${where}`);

    races.forEach((race) => {
      raceDtos.push({
        raceId: race.race_id,
        grandPrix: race.grand_prix,
        raceDate: race.race_date,
        winner: race.full_name,
        car: race.car,
        laps: race.laps,
        time: new Date(Number(race.time)).toISOString().slice(11, 23),
      });
    });

    return raceDtos;
  }

  async getRacesById(raceId: number): Promise<RaceDto[]> {
    const raceDtos: RaceDto[] = [];

    const raceCheck: any = await this._prisma.$queryRaw(
      Prisma.sql`SELECT * FROM race WHERE id = ${raceId}`,
    );

    if (raceCheck.length === 0) {
      throw new NotFoundError();
    }

    const races: any[] = await this._prisma.$queryRaw(
      Prisma.sql`SELECT * FROM race AS r   
      JOIN race_result AS rr ON rr.race_id = r.id 
      LEFT JOIN driver AS d ON d.id = rr.driver_id WHERE rr.race_id = ${raceId}`,
    );

    races.forEach((race) => {
      raceDtos.push({
        raceId: race.race_id,
        grandPrix: race.grand_prix,
        raceDate: race.race_date,
        winner: race.full_name,
        car: race.car,
        laps: race.laps,
        time: new Date(Number(race.time)).toISOString().slice(11, 23),
      });
    });

    return raceDtos;
  }
}
