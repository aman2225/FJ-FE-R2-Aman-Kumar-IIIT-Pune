// import React from 'react';
// import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ amount }) => {
//   const stripe=useStripe();
//   const elements=useElements();
//   const handleSubmit=async(event)=>{
//     event.preventDefault();
//     const {error:submitError}=await elements.submit();
//     if(submitError){
//       return;
//     }
//     const res=await fetch('/api/create-intent',{
//       method:'POST',
//       body:JSON.stringify({
//         amount:amount
//       })
//     });

//     const secretKey=await res.json();
//     console.log(secretKey);

//     const {error}=await stripe.confirmPayment({
//       clientSecret:secretKey,
//       elements,
//       confirmParams:{
//         return_url:"http://localhost:3000/"
//       }
//     })
//   }

//   return (
//     <div className='flex flex-col justify-center items-center w-full mt-6'>
//       <h2 className='m-5 font-bold'>Amount to pay: {amount}</h2>
//       <form onSubmit={handleSubmit}
//       className='max-w-md'>
        
//         <PaymentElement />
//         <button className='w-full bg-black text-white p-2 rounded-lg mt-2'>Pay</button>
//       </form>

//     </div>
//   );
// };

// export default CheckoutForm;

// import React from 'react';
// import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';



// const CheckoutForm = ({ amount }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       console.error(submitError);
//       return;
//     }

//     try {
//       const res = await fetch('/api/create-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: amount,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error('Failed to create payment intent');
//       }

//       const { clientSecret } = await res.json();

//       // Confirm the payment using Stripe
//       const { error } = await stripe.confirmPayment({
//         clientSecret,
//         elements,
//         confirmParams: {
//           return_url: 'https://fj-fe-r2-aman-kumar-iiit-pune.vercel.app/', // Redirect URL after payment
//         },
//       });

//       if (error) {
//         console.error(error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='flex flex-col justify-center items-center w-full mt-6'>
//       <h2 className='m-5 font-bold'>Amount to pay: {amount}</h2>
//       <form onSubmit={handleSubmit} className='max-w-md'>
//         <PaymentElement />
//         <button className='w-full bg-black text-white p-2 rounded-lg mt-2 cursor-pointer' type='submit'>
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;

// import React from 'react';
// import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ amount }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       console.error(submitError);
//       return;
//     }

//     try {
//       const res = await fetch('/api/create-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: amount,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error('Failed to create payment intent');
//       }

//       const { clientSecret } = await res.json();

//       // Confirm the payment using Stripe
//       const { error } = await stripe.confirmPayment({
//         clientSecret,
//         elements,
//         confirmParams: {
//           return_url: 'https://fj-fe-r2-aman-kumar-iiit-pune.vercel.app/', // Redirect URL after payment
//         },
//       });

//       if (error) {
//         console.error(error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='flex flex-col justify-center items-center  mt-6 bg-white p-4'>
//       <h2 className='m-5 font-bold text-black'>Amount to pay: {amount}</h2>
//       <form onSubmit={handleSubmit} className='w-full max-w-lg bg-white p-6 rounded-lg shadow-md'>
//         <div className="mb-4 ">
//           <PaymentElement className="bg-white text-black" /> {/* Ensure light theme for Stripe elements */}
//         </div>
//         <button
//           className='w-full bg-blue-500 text-white p-2 rounded-lg mt-2 cursor-pointer hover:bg-blue-600 transition-colors'
//           type='submit'
//         >
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;

import React from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError);
      return;
    }

    try {
      const res = await fetch('/api/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await res.json();

      // Confirm the payment using Stripe
      const { error } = await stripe.confirmPayment({
        clientSecret,
        elements,
        confirmParams: {
          return_url: 'https://fj-fe-r2-aman-kumar-iiit-pune.vercel.app/', // Redirect URL after payment
        },
      });

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6 bg-white p-4'>
      <h2 className='m-5 font-bold text-black'>Amount to pay: {amount}</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-sm bg-gray-400 p-6 rounded-lg shadow-md'>
        <div className="mb-4">
          <PaymentElement className=" text-black rounded-lg" /> {/* Ensure light theme for Stripe elements */}
        </div>
        <button
          className='w-full bg-blue-500 text-white p-2 rounded-lg mt-2 cursor-pointer hover:bg-blue-600 transition-colors'
          type='submit'
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;