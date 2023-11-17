import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DebitCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(cardDetails).every((value) => value.trim() !== '');
  };

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <p className='text-[1.2rem]'>Step 2</p>
      <p className="text-black-500 text-[1.5rem]">Set up your credit or debit card</p>
      <form>
        <input type="text" pattern="[0-9]*" placeholder="Card number" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange}className="w-[120%] py-2 px-2 input-field border border-black mt-7"/>
      </form>
      <form>
        <input type="text" placeholder="Expiration date" name="expirationDate"value={cardDetails.expirationDate} onChange={handleInputChange}className="w-[120%] py-2 px-2 input-field border border-black mt-7"/>
      </form>
      <form>
        <input type="text" placeholder="First name" name="firstName" value={cardDetails.firstName} onChange={handleInputChange} className="w-[120%] py-2 px-2 input-field border border-black mt-7"/>
      </form>
      <form>
        <input type="text" placeholder="Last name" name="lastName" value={cardDetails.lastName} onChange={handleInputChange} className="w-[120%] py-2 px-2 input-field border border-black mt-7"/>
      </form>
      <div className='mt-7 ml-[-10%]'>
        <p>Ksh 100</p>
        <p>Mobile</p>
      </div>
      <div className="w-[20%] ml-[6%]">
        <Link to={isFormValid() ? "/categories" : "#"}>
          <button type="button" className={`btn-primary ${isFormValid() ? "" : "cursor-not-allowed"}`} disabled={!isFormValid()}>
            Start Membership
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DebitCard;
