const express = require('express');
const  fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
const users = require('./routes/users')

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

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

// token
const secret = process.env.CONSUMER_SECRET
const consumer = process.env.CONSUMER_KEY
const auth = new Buffer.from(secret + consumer).toString("base64")
const generateToken =async (req,res,nex)=>{
  await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',{
    headers:{
      authorization:`Basic ${auth}`
    }
  })

}
app.post('/api/stk',generateToken, async (req,res)=>{
  const phone = req.body.phone.subString(1)
  const amount = req.body.amount
  res.json({phone,amount})
  // Function to generate a timestamp (format: YYYYMMDDHHmmss)
const generateTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

const shortcode = process.env.MPESA_PAYBILL
const passkey = process.env.MPESA_PASSKEY
const password = new Buffer.from(shortcode + passkey + generateTimestamp).toString("base64")

 await  axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
  {    
    "BusinessShortCode": shortcode,    
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
    "Timestamp":generateTimestamp,    
    "TransactionType": "CustomerPayBillOnline",   //CustomerBuyGoodsOnline
    "Amount": amount,    
    "PartyA":shortcode,    
    "PartyB":`254${phone}`,    
    "PhoneNumber":`254${phone}`,    
    "CallBackURL": "https://mydomain.com/pat",    
    "AccountReference":`254${phone}`,    
    "TransactionDesc":"Test"
 }).then(
  (data)=>{
    console.log(data)
    res.status(200).json.data
  }
).catch((error)=>{
  console.log(error.message)
  res.status(400).json(error.message)
})


})
app.listen(PORT,()=>{
    console.log(`server listening  to port ${PORT}` )
})