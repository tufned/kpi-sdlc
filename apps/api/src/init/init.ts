import express, { Express } from 'express';
import router from '../routes/index.js';

const init = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', router);
};

export default init;
