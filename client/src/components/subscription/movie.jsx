import React, { useState } from "react";
import Subscription from "./subscription";

const Movie = () => {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePaymentComplete = () => {
    setIsPaymentComplete(true);
  };

  return (
    <div>
      <h1>Movie Page</h1>
      {isPaymentComplete ? (
        <p>You are now watching the movie!</p>
      ) : (
        <Subscription onPaymentComplete={handlePaymentComplete} />
      )}
    </div>
  );
};

export default Movie;
