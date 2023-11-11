import React, { useState } from "react";

const Subscription = ({ onPaymentComplete }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mpesaPin, setMpesaPin] = useState("");

  const handlePayment = () => {
    if (phoneNumber && mpesaPin) {
        setIsPaid(true);
        onPaymentComplete();
        toast.success("Congratulations! Your payment was successful. You can now enjoy watching the movie.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Please enter your phone number and M-Pesa pin to confirm payment.", {
          position: "top-right",
          autoClose: 5000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
  return (
    <div>
      <h1>Unlock the Movie with a Subscription</h1>
      {isPaid ? (
        <>
          <p>Congratulations! Your payment was successful. You can now enjoy watching the movie.</p> 
        </>
      ) : (
        <>
          <p>This movie requires a subscription to watch.</p>
          <p>Subscription Fee: Ksh. 100</p>
          <p>Follow the steps below to unlock the movie:</p>
          <ol>
            <li>Enter your phone number and M-Pesa pin below.</li>
            <li>Click the "Pay Ksh.100" button.</li>
            <li>Complete the payment process.</li>
            <li>Return to this page after successful payment to start watching.</li>
          </ol>
          <div>
            <label>
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              M-Pesa Pin:
              <input
                type="password"
                value={mpesaPin}
                onChange={(e) => setMpesaPin(e.target.value)}
              />
            </label>
          </div>
          <button onClick={handlePayment}>Pay Ksh. 100</button>
        </>
      )}
    </div>
  );
};

export default Subscription;