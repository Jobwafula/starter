const express = require('express');
const  fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const users = require('./routes/users')
const uri = process.env.MONGO_URI
async function connect() {
    try {
      await mongoose.connect(uri, {useNewUrlParser: true,
        useUnifiedTopology: true, });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process in case of an error
    }
  }
  
  connect();



// app.use('/users',users);
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.htm')

})

app.get('/movie',(req,res)=>{
    
    const moviePath = 'movies/themba.mp4'
    const videoSize = fs.statSync(moviePath).size;
    console.log(videoSize);
    

    const range = req.headers.range;
    if(range){
        const parts =range.replace(/bytes=/,"").split("-");
        const start = parseInt(parts[0],10);
        const end = parts[1]? parseInt(parts[1],10):videoSize-1;
    
    const contentLength = end - start+1;
    

    const headers = {
        "Content-Range":`bytes ${start} -${end}/${videoSize}`,
        "Accept-Ranges" :"bytes",
        "Content-Length":contentLength,
        "Content-Type" :"video/mp4"

    }
    res.writeHead(206,headers)
    const stream =fs.createReadStream(moviePath,{start,end})
    stream.pipe(res)
} else {
    const file = fs.createReadStream(moviePath)
    res.writeHead(200,{
        "content-length":videoSize,
        "Content-Type":'video/mp4'

    });
    file.pipe(res)
}
})
app.use('/api',users)
app.listen(PORT,()=>{
    console.log(`server listening  to port ${PORT}` )
})