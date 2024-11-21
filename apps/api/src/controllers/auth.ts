import { Request, Response } from 'express';
import authService from '../services/auth.js';

const authController = {
  signUp: async (req: Request, res: Response) => {
    const { fullname, email, password } = req.body;
    const user = await authService.signup({ fullname, email, password });
    res.status(201).json(user);
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const tokens = await authService.login({ email, password });

    res.status(200).json({ accessToken: tokens.accessToken });
  },
  logout: async (req: Request, res: Response) => {
    await authService.logout();

    res.status(204).end();
  }
};

export default authController;
