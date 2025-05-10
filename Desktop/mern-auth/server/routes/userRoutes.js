import express from 'express';
import userAuth from '../middleware/userAuth.js'; // ✅ Corrected path (no "s")
import { isAuthenticated, getUserData } from '../controllers/userController.js';

const router = express.Router();

router.get('/is-auth', userAuth, isAuthenticated);
router.get('/data', userAuth, getUserData);

export default  router;
