const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./routes/users')

app.use('/users',users);
app.listen(PORT,()=>{
    console.log(`server listening  to port ${PORT}` )
})