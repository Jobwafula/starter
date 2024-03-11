// src/components/LinearProgressBar.js

import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const calculateProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <div className="w-full h-4 bg-gray-300 rounded-full">
      <div
        className="h-full bg-teal-500 rounded-full"
        style={{ width: `${calculateProgress()}%` }}
      />
    </div>
  );
};

export default ProgressBar;
