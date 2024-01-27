import React from "react";
import "./giftcardwidget.css";
import airtelpaymentsbank from "../images/airtelpaymentsbank.png";
import mobikwik from "../images/mobikwik.png";
import payzapp from "../images/payzapp.png";
import amazonpay from "../images/amazonpay.png";

const GiftCardWidget = () => {
  const HandleGiftcardAlert = () => {
    alert(
      "Sorry..ths service is not available at the moment.Try another payment method."
    );
  };

  return (
    <>
      <div className="giftcardwidget-container">
        <p className="giftcard-head">Select wallet to pay</p>
        <div className="giftcard-options-div">
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <img src={airtelpaymentsbank} alt="apb" className="apb-img" />
            <p>Airtel Payments Bank</p>
          </div>
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <div className="icc-img"></div>
            <p>Itz Cash Card</p>
          </div>
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <img src={mobikwik} alt="mk" className="mw-img" />
            <p>MobiKwik</p>
          </div>
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <img src={payzapp} alt="pz" className="pz-img" />
            <p>PayZapp</p>
          </div>
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <img src={amazonpay} alt="ap" className="ap-img" />
            <p>Amazon Pay</p>
          </div>
          <div className="giftcard-option" onClick={HandleGiftcardAlert}>
            <div className="mmtgc-img"></div>
            <p>MakeMyTrip GiftCard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardWidget;
