import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_API_KEY);

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm/>
    </Elements>
   )
}

export default Stripe;