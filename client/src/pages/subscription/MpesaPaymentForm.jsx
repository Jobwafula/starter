// src/components/MpesaPaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';

const MpesaPaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation on phone number and plan
    if (!phoneNumber || !plan) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Implement backend logic for handling M-Pesa payment

    try {
      // Example: Send data to server
      const response = await axios.post('/api/mpesa-payment', { phoneNumber, plan });
      console.log(response.data);

      // TODO: Redirect to a success page or handle payment status
    } catch (error) {
      console.error('Error processing M-Pesa payment:', error);
      // TODO: Handle error, show a message to the user, etc.
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      
      
      <form className="" onSubmit={handleSubmit}>
      <div>
      <h1 className="text-[1.5rem] text-center">Step 2</h1>
      <p className="text-[2rem] mb-[1rem]">Pay With Mpesa</p>
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan">
            Period Plan:
          </label>
          <select
            id="plan"
            className="w-full px-3 py-2 border rounded-md"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="">Select Plan</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 w-[100%] text-white px-4 py-2 rounded-md hover:bg-blue-600 block mx-auto"
        >
          Pay with M-Pesa
        </button>
      </form>
    </div>
  );
};

export default MpesaPaymentForm;
