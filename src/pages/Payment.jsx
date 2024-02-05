import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/payment.css";
import {useForm, Controller} from "react-hook-form";

const Payment = () => {
  const {handleSubmit, control, setValue} = useForm();
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  const onSubmit = (data) => {
    // Validate data if needed
    // For example, check if the card number, cvv, and expiry are in the correct format

    // Simulate asynchronous submission (e.g., API call)
    setTimeout(() => {
      // Handle payment submission logic here
      console.log(data);
      // Set feedback based on the result (success or error)
      setSubmissionFeedback({
        type: "success", // or "error"
        message:
          "Payment submitted successfully!,  check your email for confirmation.", // or an error message
      });

      // Clear feedback after 3 seconds
      setTimeout(() => {
        setSubmissionFeedback(null);
      }, 3000);
    }, 1000); // Simulating an API call delay
  };

  const handleCardNumberChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setValue("cardNumber", sanitizedValue);
  };

  const handleExpiryChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = sanitizedValue.replace(/(\d{2})(\d{0,2})/, "$1/$2"); // Format as MM/YY
    setValue("expiry", formattedValue);
  };

  return (
    <Helmet title="Payment">
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <CommonSection title="Payment" />
      <section className="payment__section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="mb-3">Payment Information</h2>

          {/* Card Number */}
          <div>
            <label htmlFor="cardNumber" className="mb-0 mt-2">
              Card Number
            </label>
            <Controller
              name="cardNumber"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  id="cardNumber"
                  placeholder="Card Number"
                  onChange={handleCardNumberChange}
                />
              )}
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label htmlFor="expiry" className="mb-0 mt-2">
              Expiry Date (MM/YY)
            </label>
            <Controller
              name="expiry"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  maxLength="5"
                  onChange={handleExpiryChange}
                />
              )}
            />
          </div>

          {/* CVV */}
          <div>
            <label htmlFor="cvv" className="mb-0 mt-2">
              CVV
            </label>
            <Controller
              name="cvv"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="password"
                  id="cvv"
                  placeholder="CVV"
                  maxLength="4"
                />
              )}
            />
          </div>

          {/* Name on Card */}
          <div className="mb-3">
            <label htmlFor="cardName" className="mb-0 mt-2">
              Name on Card
            </label>
            <Controller
              name="cardName"
              control={control}
              render={({field}) => (
                <input
                  {...field}
                  type="text"
                  id="cardName"
                  placeholder="Name on Card"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces are allowed"
                />
              )}
            />
          </div>

          {/* Success Overlay */}
          {submissionFeedback && submissionFeedback.type === "success" && (
            <div className="overlay">
              <div className="success">{submissionFeedback.message}</div>
            </div>
          )}

          <button type="submit" className="addTOCart__btn py-3">
            Submit Payment
          </button>
        </form>
      </section>
    </Helmet>
  );
};

export default Payment;
