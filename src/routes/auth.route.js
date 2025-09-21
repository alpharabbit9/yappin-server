import express from 'express';

const router = express.Router();

router.get('/signin', (req,res) =>{
    res.send('Login route');
})
router.post('/login', (req,res) =>{
    res.send('Login route');
})
router.post('/logout', (req,res) =>{
    res.send('Login route');
})


export default router;