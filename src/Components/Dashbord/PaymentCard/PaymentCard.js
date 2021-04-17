import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51IeYvsHwT5VpE18lFwKMJiSKKY0X6R1A4fjNXjzfFPn1iSDgAsca2cBK4IZdiNUy9NI7h0HOBPxBisu3AOXXgWGS00jP0njZ2q');

const PaymentCard = () => {
    return (
        <div>
             <Elements stripe={stripePromise}>
             <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
    </Elements>
        </div>
    );
};

export default PaymentCard;