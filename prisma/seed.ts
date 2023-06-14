import { PrismaClient } from '@prisma/client';
import { drivers, raceResults, races, teams } from './data';

const prisma = new PrismaClient();

async function load() {
  try {
    await prisma.driver.deleteMany();
    console.log('Deleted records in driver table');

    await prisma.team.deleteMany();
    console.log('Deleted records in team table');

    await prisma.race.deleteMany();
    console.log('Deleted records in race table');

    await prisma.race_result.deleteMany();
    console.log('Deleted records in race_result table');

    await prisma.$queryRaw`ALTER TABLE team AUTO_INCREMENT = 1`;
    console.log('reset team auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE driver AUTO_INCREMENT = 1`;
    console.log('reset driver auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE race AUTO_INCREMENT = 1`;
    console.log('reset race auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE race_result AUTO_INCREMENT = 1`;
    console.log('reset race_result auto increment to 1');

    await prisma.team.createMany({
      data: teams,
    });
    console.log('Added team data');

    await prisma.driver.createMany({
      data: drivers,
    });
    console.log('Added driver data');

    await prisma.race.createMany({
      data: races,
    });
    console.log('Added race data');

    await prisma.race_result.createMany({
      data: raceResults,
    });
    console.log('Added race_result data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

load();
