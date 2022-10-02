import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button-component";
import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment-form-styles";

const PaymentForm = () => {
  const paymentHandler = async (e) => {
    e.preventDefault(); 
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
