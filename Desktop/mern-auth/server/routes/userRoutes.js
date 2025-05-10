import express from 'express';
import userAuth from '../middlewares/userAuth.js';
import { getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/data', userAuth, getUserProfile);

export default router;
