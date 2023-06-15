# F1-Racing
This Application help query information F1 racing. It has 6 API. I clone data form `https://www.formula1.com/`.The technology: Nodejs(18.16.0), Prisma, mysql, inversify, Eslint, prettier, Swagger... 

## Prerequisites

- [Node.js(18.16.0)](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/docs)

## Set up the database (mysql)
First, Create new database in mysql.
```sh
CREATE DATABASE IF NOT EXISTS your_database_name.
```

Create `.env` file same `.env.example` file. After, update the `username`, `password` and `database`.
```sh
DATABASE_URL="mysql://<username>:<password>@localhost:3306/<database>"
```

## Set up the F1 app
Clone this repository.
```sh
git clone https://github.com/minhquan-hub/F1-Racing.git
```

Add `PORT=<yourport>` into `.env` file.
```sh
PORT=5001
```

Install the dependencies.
```sh
npm install
```

Migrate schema into your database.
```sh
npm run migrate:mysql
```
>If you change the schema, it will ask you `Enter a name for the new migration:` 

Generate the schema. After, You migrate it into your database.

```sh
npm run generate
```

Seed the data into your database.
```sh
npm run seed
```

## Run the App
Run the app with following command:
```sh
npm run start
```
>Open your browser at [localhost:5001](localhost:5001) to see the running application.

## Swagger Documentation
```sh
http://localhost:5001/swagger
```

- Get all races by year or grandPrix.
```sh
http://localhost:5001/api/race?year=2023&grandPrix=Miami
```
>This Api has data 3 races (`Bahrain 2023, Miami 2023, 2022 Spain`). `For example: year=2023, grandPrix=Miami`. The year and grandPrix are optional. You can input or not. If your request data does't exist into database, it will return []

- Get all races by raceId
```sh
http://localhost:5001/api/race/1
```
> This Api has all races from 2022 to 2023 (The total is 30 races). `For example: raceId=1`. If your request data does't exist into database, it will return `404: Not Found`.

- Get driver race result by year and driverId
```sh
http://localhost:5001/api/race-result/driver?year=2023&driverId=1
```
>This Api has data 60 race results of 3 races (`Bahrain 2023, Miami 2023, 2022 Spain`). `For example: year=2022, driverId=1`. If your request data does't exist into database, it will return `404: Not Found`.

- Get driver position by raceId and position
```sh
http://localhost:5001/api/race-result/position?raceId=1&pos=1
```
>This Api will query follow race results of 3 races (`Bahrain 2023, Miami 2023, 2022 Spain`). `For example: raceId=1, pos=1`. If your request data does't exist into database, it will return `404: Not Found`.

- Get all driver information
```sh
http://localhost:5001/api/driver
```
>This Api has 20 drivers information.

Post: Post create driver information
```sh
http://localhost:5001/api/driver
```
Body:
```sh
{
  "fullName": "Max Verstappen",
  "no": 1,
  "teamId": 2,
  "country": "Netherlands",
  "dateOfBirth": "1997-09-30",
  "placeOfBirth": "Hasselt, Belgiu",
  "rank": 1
}
```
> This Api will create a new driver.