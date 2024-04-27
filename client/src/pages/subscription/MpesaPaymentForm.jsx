// src/components/MpesaPaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from '../../components/ProgressBar';

const MpesaPaymentForm = () => {
  const [phone, setPhoneNumber] = useState('');
  const [plan, setPlan] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation on phone number and plan
    if (!phone || !plan) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Implement backend logic for handling M-Pesa payment

    try {
      // Example: Send data to server
      const response = await axios.post('/api/mpesa-payment', { phone, plan });
      console.log(response.data);

      // TODO: Redirect to a success page or handle payment status
    } catch (error) {
      console.error('Error processing M-Pesa payment:', error);
      // TODO: Handle error, show a message to the user, etc.
    }
  };
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 3; // Assuming two steps: registering and subscribing

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-1/2">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps}  />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center mb-4">Step 2</h1>
            <p className="text-lg mb-4 text-center">Pay With Mpesa</p>
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
              value={phone}
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
            className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Pay with M-Pesa
          </button>
        </form>
      </div>
    </section>
  );
};

export default MpesaPaymentForm;
