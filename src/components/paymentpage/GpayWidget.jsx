import React, { useState } from "react";
import "./gpaywidget.css";
import ConfirmationPopup from "../confirmation/ConfirmationPopup";
import OutsideClickHandler from "react-outside-click-handler";

const GpayWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [upiId, setUpiId] = useState("");
  const [isUpiIdValid, setIsUpiIdValid] = useState(true);
  const [payButtonActive, setPayButtonActive] = useState(false);

  const validateUpiId = () => {
    if (!upiId.includes("@")) {
      setIsUpiIdValid(false);
    } else {
      setIsUpiIdValid(true);
    }
  };

  const HandleBtnClickonConfirm = () => {
    // setShowConfirmation(true);
    alert(
      "Sorry..ths service is not available at the moment.Try another payment method."
    );
  };

  const handlePayButtonActive = () => {
    if (upiId && isUpiIdValid) {
      setPayButtonActive(true);
    } else {
      setPayButtonActive(false);
    }
  };

  return (
    <>
      <div className="gpaymain-container">
        <div className="gpay-payment-div">
          <div className="gpayicondiv"></div>
          <p>Enter UPI ID</p>
          <div className="gpay-input-btn">
            <input
              type="text"
              placeholder="userName@upi"
              required
              onChange={(e) => {
                setUpiId(e.target.value);
                validateUpiId();
                handlePayButtonActive();
              }}
            />

            <button
              disabled={!payButtonActive}
              style={{ opacity: !payButtonActive ? 0.5 : 1 }}
              onClick={HandleBtnClickonConfirm}
            >
              VERIFY & PAY
            </button>
            {showConfirmation && (
              <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
            )}
          </div>
          {!isUpiIdValid && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "10px" }}>
              Invalid UPI Id
            </p>
          )}
        </div>
        <p className="amounttopay">₹ 5,655</p>
        <p className="gpay-termsandconditions">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default GpayWidget;
