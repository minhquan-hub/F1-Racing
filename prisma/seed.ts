import { PrismaClient } from "@prisma/client";
import { drivers, teamDrivers, teams } from "./data";

const prisma = new PrismaClient();

async function load() {
    try {
        await prisma.driver.deleteMany();
        console.log('Deleted records in driver table');

        await prisma.team.deleteMany();
        console.log('Deleted records in team table');

        await prisma.team_driver.deleteMany();
        console.log('Deleted records in team_driver table');

        await prisma.$queryRaw`ALTER TABLE team AUTO_INCREMENT = 1`;
        console.log('reset team auto increment to 1');

        await prisma.$queryRaw`ALTER TABLE driver AUTO_INCREMENT = 1`;
        console.log('reset driver auto increment to 1');

        await prisma.$queryRaw`ALTER TABLE team_driver AUTO_INCREMENT = 1`;
        console.log('reset team_driver auto increment to 1');

        await prisma.driver.createMany({
            data: drivers
        })
        console.log('Added driver data');

        await prisma.team.createMany({
            data: teams
        })
        console.log('Added team data');

        await prisma.team_driver.createMany({
            data: teamDrivers
        })
        console.log('Added team_driver data');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

load()