import express from 'express';
import asyncWrapper from '../middlewares/asyncWrapper.js';
import authController from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', asyncWrapper(authController.signUp));
router.post('/login', asyncWrapper(authController.login));
router.post('/logout', asyncWrapper(authController.logout));

export default router;
