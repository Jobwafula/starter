import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MpesaPayment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(100);
  const [mpesaPin, setMpesaPin] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleMpesaPinChange = (e) => {
    setMpesaPin(e.target.value);
    // if (/^\d{4}$/.test(inputMpesaPin) || inputMpesaPin === '') {
    //     setMpesaPin(inputMpesaPin);
    //   }
  };

  const handlePayment = async () => {
    try {
      const apiKey = 'YOUR_API_KEY';
      const apiSecret = 'YOUR_API_SECRET';

      const response = await axios.post(
        'https://api.mpesa.com/mpesa-payments',
        {
          phoneNumber,
          amount,
          mpesaPin,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}:${apiSecret}`,
          },
        }
      );

      console.log('Payment successful:', response.data);
      setPaymentComplete(true);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <h2>Mpesa Payment</h2>
      {currentStep === 1 && (
        <div>
          <p>Step 1: Choose Payment Method</p>
          <p>Payment Method: Mpesa</p>
          <button className="btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <p>Step 2: Enter Phone Number</p>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="w-[120%] py-2 px-2 input-field border border-black mt-7"
            required
          />
          <div className="w-[50%] ml-[25%]">
            <button className="btn-primary" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}
   {currentStep === 3 && (
  <div>
    <p>Step 3: Enter Mpesa Pin</p>
    <label htmlFor="mpesaPin">Mpesa Pin:</label>
    <input
      type="password"
      id="mpesaPin"
      value={mpesaPin}
      onChange={handleMpesaPinChange}
      className="w-[120%] py-2 px-2 input-field border border-black mt-7"
      required
    />
    <div className="w-[50%] ml-[25%]">
      <Link to="/categories">
        <button className="btn-primary" onClick={handlePayment} disabled={!paymentComplete}>
          Make Payment
        </button>
      </Link>
    </div>
  </div>
)}
    </div>
  );
};

export default MpesaPayment;
