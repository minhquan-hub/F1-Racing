import { injectable } from 'inversify';
import { IDriverService } from '../interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { DriverCreateDto, DriverDto } from '../dtos';

@injectable()
export class DriverService implements IDriverService {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }

  async getAllDrivers(): Promise<DriverDto[]> {
    const driverDto: DriverDto[] = [];

    const drivers: any[] = await this._prisma.$queryRaw(
      Prisma.sql`SELECT * FROM team AS t
      JOIN driver AS d ON d.team_id = t.id`,
    );

    drivers.forEach((driver) => {
      driverDto.push({
        driverId: driver.id,
        fullName: driver.full_name,
        no: driver.no,
        team: driver.team_name,
        country: driver.country,
        dateOfBirth: driver.date_of_birth,
        placeOfBirth: driver.place_of_birth,
        rank: driver.rank,
      });
    });

    return driverDto;
  }

  async createDriver(driver: DriverCreateDto): Promise<DriverDto> {
    const driverCreate: any = await this._prisma.driver.create({
      data: {
        full_name: driver.fullName,
        country: driver.country,
        date_of_birth: new Date(driver.dateOfBirth),
        place_of_birth: driver.placeOfBirth,
        rank: driver.rank,
        team_id: driver.teamId,
        no: driver.no,
      },
    });

    const team: any = await this._prisma.$queryRaw(
      Prisma.sql`SELECT * FROM team WHERE id = ${driverCreate.team_id}`,
    );

    const driverDto: DriverDto = {
      driverId: driverCreate.id,
      fullName: driverCreate.full_name,
      no: driverCreate.no,
      team: team.team_name,
      country: driverCreate.country,
      dateOfBirth: driverCreate.date_of_birth,
      placeOfBirth: driverCreate.place_of_birth,
      rank: driverCreate.no,
    };

    return driverDto;
  }
}
