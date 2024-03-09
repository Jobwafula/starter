const express = require('express')
const router = express.Router();
router.get('/users',(req,res)=>{
    res.end("Users")

});

router.post('/register',(req,res)=>{
    res.end("Users details")

});
module.exports = router;
