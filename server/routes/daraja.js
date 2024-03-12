const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/lipa",async (req, res) => {
  const phone = req.body.phone;
  const amount = req.body.amount;
  try {
    // Call the function to send STK push
    const response = await sendStkPush(phone,amount);

    // Send the response back to the client
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
});






  // generate token
  const generateToken = async () => {
    const consumerKey = process.env.CONSUMER_KEY;
    const consumerSecret = process.env.CONSUMER_SECRET;
    const url =
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"; //sandbox
    try {
      const encodedCredentials = new Buffer.from(
        consumerKey + ":" + consumerSecret
      ).toString("base64");
      const headers = {
        Authorization: "Basic" + " " + encodedCredentials,
        "Content-Type": "application/json",
      };
      const response = await axios.get(url, { headers });
      return response.data.access_token;
    } catch (error) {
      throw new Error("Failed to get access token.");
    }
  };
  //   stk push
 async function sendStkPush(phone,amount) {
    const token = await generateToken();
    const date = new Date();
    const timestamp =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2) +
      ("0" + date.getHours()).slice(-2) +
      ("0" + date.getMinutes()).slice(-2) +
      ("0" + date.getSeconds()).slice(-2);

    //you can use momentjs to generate the same in one line

    const shortCode = process.env.MPESA_TILL; //sandbox -174379
    const passkey = process.env.PASSKEY;

    const stk_password = new Buffer.from(
      shortCode + passkey + timestamp
    ).toString("base64");

    //choose one depending on you development environment
    const url =
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };

    const requestBody = {
      BusinessShortCode: shortCode,
      Password: stk_password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline", //till "CustomerBuyGoodsOnline"
      Amount: amount,
      PartyA:phone,
      PartyB: shortCode,
      PhoneNumber:phone,
      CallBackURL: "https://yourwebsite.co.ke/callbackurl",
      AccountReference: "account",
      TransactionDesc: "test",
    };

    try {
      const response = await axios.post(url, requestBody, { headers });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


module.exports = router;
