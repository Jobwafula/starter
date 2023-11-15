import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'link'
const SubscriptionPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    router.push('/success');
  };
  return (
    <div>
        <p>Watch any movie you want to.</p>
        <p>For you to be able to watch,you are only required to pay an amount of Ksh 100</p>
      <form>
        <label>
          M-Pesa
          <input type="m-pesa" name="payment_method" value="mpesa" required />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <Link href="/categories">
        <button type="button" onClick={handleNext}>
          Next
        </button>
        </Link>
      </form>
    </div>
  );
};
export default SubscriptionPage;