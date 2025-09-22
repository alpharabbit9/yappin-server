import express from 'express';
import { login, logout, signUp, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', login)
router.post('/logout', logout)

router.put('/updateProfile', protectRoute, updateProfile)

router.get('/auth', protectRoute, (req, res) => res.status(200).json(req.user))


export default router;