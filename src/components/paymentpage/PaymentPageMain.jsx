import React from "react";
import PaymentOptions from "./PaymentOptions";
import "./paymentpagemain.css";
import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";

const PaymentPageMain = () => {
  return (
    <div className="paymentpage-conainer">
      <div className="paymentpage-maindiv">
        <div className="logo-and-text">
          <Link to="/" className="linktohome-frompay">
            <div className="mmt-logo-white"></div>
          </Link>
          <p>
            <span>Hey,</span> You are viewing this booking at the best price
          </p>
        </div>
        <div className="safeandsecure-div">
          <div className="safeandsecure-img"></div>
          <p>SAFE & SECURE</p>
        </div>
      </div>
      <PaymentOptions />
    </div>
  );
};

export default PaymentPageMain;
