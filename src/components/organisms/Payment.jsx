import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components"

const PaymentScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input className="form-check-input" type="radio" value="Paypal" />
              <label className="form-check-input">PayPal or MasterCard </label>
            </div>
          </div>

         <button type="submit">
          <link to="/placeorder" className="text-white">
            Continue
          </link>
         </button>
        </form>
      </div>     
    </>
  );
}

export default PaymentScreen;
