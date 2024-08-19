// // // PaymentComponent.js

// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);
// //   const [processing, setProcessing] = useState(false);
// //   const [succeeded, setSucceeded] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setProcessing(true);

// //     const { error: backendError, clientSecret } = await fetch('/create-payment-intent', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ amount: 1000, currency: 'usd' }), // example amount
// //     }).then((r) => r.json());

// //     if (backendError) {
// //       setError(backendError);
// //       setProcessing(false);
// //       return;
// //     }

// //     const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //       payment_method: {
// //         card: elements.getElement(CardElement),
// //       },
// //     });

// //     if (stripeError) {
// //       setError(stripeError.message);
// //     } else if (paymentIntent.status === 'succeeded') {
// //       setSucceeded(true);
// //     }

// //     setProcessing(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
// //       {error && <div className="text-red-500">{error}</div>}
// //       <button
// //         type="submit"
// //         disabled={!stripe || processing || succeeded}
// //         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
// //       >
// //         {processing ? 'Processing...' : 'Pay Now'}
// //       </button>
// //       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
// //     </form>
// //   );
// // };

// // const PaymentComponent = () => {
// //   return (
// //     <Elements stripe={stripePromise}>
// //       <CheckoutForm />
// //     </Elements>
// //   );
// // };

// // export default PaymentComponent;

// // PaymentComponent.js

// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     try {
//       const response = await fetch('http://localhost:3001/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: 1000, currency: 'usd' }), // example amount
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const { error: backendError, clientSecret } = await response.json();

//       if (backendError) {
//         setError(backendError);
//         setProcessing(false);
//         return;
//       }

//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         setSucceeded(true);
//       }

//       setProcessing(false);
//     } catch (error) {
//       console.error('Error:', error.message);
//       setError(error.message);
//       setProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
//       {error && <div className="text-red-500">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing || succeeded}
//         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
//       >
//         {processing ? 'Processing...' : 'Pay Now'}
//       </button>
//       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
//     </form>
//   );
// };

// const PaymentComponent = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentComponent;


// PaymentComponent.js





/////كود لستلمتو/////////////////////////////////////////////////////

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseInt(amount), currency: 'usd' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { error: backendError, clientSecret } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: email,
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === 'succeeded') {
        setSucceeded(true);
      }

      setProcessing(false);
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-3 w-full border border-gray-300 rounded-md"
        required
      />
      <input
        type="number"
        placeholder="Amount in cents"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-3 w-full border border-gray-300 rounded-md"
        required
      />
      <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing || succeeded}
        className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
      {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
    </form>
  );
};

const PaymentComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;



// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const location = useLocation(); // استخدام useLocation لاستخراج البيانات
//   const { formData } = location.state || {}; // البيانات القادمة من صفحة طلب الإعلان
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState(5000); // تحديد المبلغ هنا (مثلاً 5000 سنت أي 50 دولار)

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     try {
//       const response = await fetch('http://localhost:4000/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: parseInt(amount), currency: 'usd' }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const { error: backendError, clientSecret } = await response.json();

//       if (backendError) {
//         setError(backendError);
//         setProcessing(false);
//         return;
//       }

//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             email: email,
//           },
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         setSucceeded(true);

//         // تخزين البيانات في قاعدة البيانات بعد نجاح الدفع
//         await axios.post('http://localhost:4000/api/ads', formData, {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         console.log('تم تخزين بيانات الإعلان بنجاح');
//       }

//       setProcessing(false);
//     } catch (error) {
//       console.error('Error:', error.message);
//       setError(error.message);
//       setProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Amount in cents"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
//         required
//       />
//       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
//       {error && <div className="text-red-500">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing || succeeded}
//         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
//       >
//         {processing ? 'Processing...' : 'Pay Now'}
//       </button>
//       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
//     </form>
//   );
// };

// const PaymentComponent = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentComponent;
