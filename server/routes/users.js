const express = require('express')
const router = express.Router();
const UserModel =require('../models/user.model')
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/register',async (req,res)=>{
    try{
        const {email} = req.body
        // check if user exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
          }

           // Create a new user instance
    const newUser = new UserModel({
        email
      });
       // save user to the database
    await newUser.save();
    }
    catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
      }
    
    

});
module.exports = router;
