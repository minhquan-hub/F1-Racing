# F1-Racing

## Prerequisites

- [Node.js(18.16.0)](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/docs)

## Set up the database (mysql)
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

Generate the schema, and then migrate it into your database.

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
Open your browser at [localhost:5001](localhost:5001) to see the running application.

## Swagger Documentation
```sh
http://localhost:5001/swagger
```


