// 'use client';
// import React from 'react';
// import { useSearchParams } from 'next/navigation';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/CheckoutForm';
// import RideSelector from './components/RideSelector';

// function Hello({amount}) {
//   // const searchParams = useSearchParams();
//   // const amount = searchParams.get('amount'); // Retrieve the amount from the URL
//   // const amount = (rideDuration * vehicle.multiplier).toFixed(2);
  
//   const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)
//   const options={
//     mode:'payment',
//     amount:Math.round(amount*100),
//     currency:'inr'
//   };
//   if (!amount || amount <= 0) {
//     return <div>Invalid amount. Please select a ride.</div>;
//   }

//   return (
//     <Elements stripe={stripePromise} options={options}>
//        <CheckoutForm amount={amount} />

//     </Elements>
//   );
// }

// export default Hello;

// import React from 'react';
// import { useRouter } from 'next/router';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/CheckoutForm';

// function Hello() {
//   const router = useRouter();
//   const { amount } = router.query; // Extract amount from the query parameters

//   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

//   // Ensure amount is valid
//   const parsedAmount = parseFloat(amount);
//   if (!parsedAmount || parsedAmount <= 0) {
//     return <div>Invalid amount. Please select a valid ride.</div>;
//   }

//   const options = {
//     mode: 'payment',
//     amount: Math.round(parsedAmount * 100),
//     currency: 'inr',
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm amount={parsedAmount} />
//     </Elements>
//   );
// }

// export default Hello;

// 'use client';
// import React from 'react';
// import { useSearchParams } from 'next/navigation';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/CheckoutForm';

// function Hello() {
//   const searchParams = useSearchParams();
//   const amount = searchParams.get('amount'); // Retrieve the amount from the URL

//   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
//   const options = {
//     mode: 'payment',
//     amount: Math.round(amount * 100),
//     currency: 'usd',
//   };

//   if (!amount || amount <= 0) {
//     return <div>Invalid amount. Please select a ride.</div>;
//   }

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm amount={amount} />
//     </Elements>
//   );
// }

// export default Hello;

'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';

function Hello() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount'); // Retrieve the amount from the URL

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

  if (!amount || amount <= 0) {
    return <div>Invalid amount. Please select a ride.</div>;
  }

  const options = {
    mode: 'payment',
    amount: Math.round(amount * 100),
    currency: 'usd', // Change to 'inr' if needed
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}

export default Hello;