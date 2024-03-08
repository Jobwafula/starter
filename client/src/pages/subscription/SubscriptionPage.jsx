import mpesa from '../../assets/subscription/mpesa.jpg'
import visa from '../../assets/subscription/visa.jpg'
import { useNavigate } from 'react-router-dom';
const SubscriptionPage = () => {
  const navigate = useNavigate();

  

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <p className="text-[1.5rem]">Step 1</p>
      <p className="text-[2rem] mb-[1rem]">Choose a payment method</p>
      <section className="flex flex-col w-[50%] space-y-[1rem]">
        <div className="shadow flex border  space-x-[1rem] ">
          <form>
            <input type="checkbox" />
          </form>
      
          
          <p className='text-center'>Credit card/Debitcard</p>
          
        </div>
        <div className="shadow border flex space-x-[1rem] ">
          <form>
            <input   type="checkbox" />
          </form>
        
          <p className='text-center'>M-pesa</p>
          
        </div>
        <div className="w-[50%] ml-[25%]">
           <button className="btn-primary" onClick={()=>navigate('/category')}>Next</button>
        </div>
       
      </section>
      
      
        
        </div>
  );
};
export default SubscriptionPage;