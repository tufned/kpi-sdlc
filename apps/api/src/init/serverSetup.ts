import { Express } from 'express';
import env from 'dotenv';
import init from './init.js';

env.config();
const { SERVER_PORT } = (await import('../configs/config.js')).config;

const serverSetup = (app: Express) => {
  init(app);
  app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
  });
};

export default serverSetup;
