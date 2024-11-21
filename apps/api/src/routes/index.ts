import express from 'express';
import auth from './auth.js';
import pets from './pets.js';

const router = express.Router();

router.use('/auth', auth);
router.use('/pets', pets);

// router.use('/recommendations', );
// router.use('/caretaker', );
// router.use('/owner', );
// router.use('/procedures', );
// router.use('/vet', );
// router.use('/medical-book', );

export default router;
