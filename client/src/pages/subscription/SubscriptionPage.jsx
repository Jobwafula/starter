import mpesa from "../../assets/subscription/mpesa.jpg";
import visa from "../../assets/subscription/visa.jpg";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";
const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Assuming two steps: registering and subscribing

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };


  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="w-[50%]"><ProgressBar  currentStep={currentStep} totalSteps={totalSteps} /></div>
      <p className="text-[1.5rem]">Step 1</p>
      <p className="text-[2rem] mb-[1rem]">Choose a payment method</p>

      <section className="flex flex-col w-[50%] space-y-[1rem]">
        <div className="shadow flex border  space-x-[1rem] ">
          <form>
            <input type="checkbox" />
          </form>

          <p className="text-center">Credit card/Debitcard</p>
        </div>
        <div className="shadow border flex space-x-[1rem] ">
          <form>
            <input type="checkbox" />
          </form>

          <p className="text-center">M-pesa</p>
        </div>
        <div className="w-[50%] ml-[25%]">
          <button className="btn-primary" onClick={() => navigate("/pages/subscription/mpesa")}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
};
export default SubscriptionPage;
