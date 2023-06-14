import dotenv from 'dotenv';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';

import app from './app';
import { NextFunction, Request, Response } from 'express';
import { container } from './container';
import './controllers';
import BaseError from './error_handling/base_error';

dotenv.config();
const port = process.env.PORT || 5002;

const server = new InversifyExpressServer(
  container,
  null,
  { rootPath: '/api' },
  app,
);

server.setErrorConfig((app) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const error = err as BaseError;
    console.log(error);
    return res.status(error.status ? error.status : 500).json({
      message: error.status ? error.message : 'Internal Server Error',
    });
  });
});

const appConfigured = server.build();

// Start server
appConfigured.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
