import express from 'express';
import { signUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup',signUp)
router.post('/login', (req,res) =>{
    res.send('Login route');
})
router.post('/logout', (req,res) =>{
    res.send('Login route');
})


export default router;