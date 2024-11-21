import { Request, Response } from 'express';

const petsController = {
  getAll: async (req: Request, res: Response) => {
    res.status(200).end();
  },
  create: async (req: Request, res: Response) => {
    res.status(201).end();
  },
  delete: async (req: Request, res: Response) => {
    res.status(204).end();
  }
};

export default petsController;
