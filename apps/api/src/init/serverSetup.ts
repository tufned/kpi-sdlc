import { Express } from 'express';
import init from './init.js';
import initDB from './database.js';
import env from 'dotenv';

env.config();
const { SERVER_PORT } = (await import('../configs/config.js')).config;

const serverSetup = (app: Express) => {
  initDB();
  init(app);
  app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
  });
};

export default serverSetup;
