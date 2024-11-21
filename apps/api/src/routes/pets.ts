import express from 'express';
import asyncWrapper from '../middlewares/asyncWrapper.js';
import petsController from '../controllers/pets.js';

const router = express.Router();

router.get('/', asyncWrapper(petsController.getAll));
router.post('/', asyncWrapper(petsController.create));
router.delete('/', asyncWrapper(petsController.delete));

export default router;
