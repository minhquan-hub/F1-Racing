import { injectable } from 'inversify';
import { IRaceService } from '../interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { RaceDto, RaceYearGrandPrixRequestDto } from '../dtos';

@injectable()
export class RaceResultService implements IRaceService {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }

  async getAllRaces(
    raceQuery: RaceYearGrandPrixRequestDto,
  ): Promise<RaceDto[]> {
    const raceDto: RaceDto[] = [];

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
        JOIN race_result AS rr ON rr.race_id = r.id AND pos = 1 ${where}`);

    races.forEach((race) => {
      raceDto.push({
        raceId: race.id,
        grandPrix: race.grand_prix,
        raceDate: race.race_date,
        winner: race.driver,
        car: race.car,
        laps: race.laps,
        time: new Date(Number(race.time)).toISOString().slice(11, 23),
      });
    });

    return raceDto;
  }
}
