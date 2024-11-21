import express, { Express } from 'express';
import router from '../routes/index.js';
import errorMiddleware from '../middlewares/error.js';

const init = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', router);

  app.use(errorMiddleware);
};

export default init;
