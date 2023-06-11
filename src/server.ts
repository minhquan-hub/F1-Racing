import dotenv from 'dotenv'
import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';

import app from './app';
import { container } from './container';

dotenv.config();
const port = process.env.PORT || 5002;

let server = new InversifyExpressServer(container, null, { rootPath: "/api"}, app)  

let appConfigured = server.build()

// Start server
appConfigured.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

// app.listen(port, () => {
//     console.log(`Server listening on http://localhost:${port}`);
// })