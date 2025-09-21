import express from 'express';

const router = express.Router();

router.post('/signin', (req,res) =>{
    res.send('send route');
})



export default router;