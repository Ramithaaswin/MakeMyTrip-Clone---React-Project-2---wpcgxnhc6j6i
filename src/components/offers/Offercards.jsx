import React from "react";
import "./offers.css";
import offers1 from "../images/offers1.png";

const Offercards = () => {
  return (
    <>
      <div className="offers-btmdiv-griditem">
        <div className="griditem1-topdiv">
          <img src={offers1} alt="offersimg1" />
          <div>
            <h3>For Your 1st Hotel Booking!</h3>
            <p>Upto 20% OFF</p>
          </div>
        </div>
        <div className="griditem1-bottomdiv">
          <ul>
            <li>T&C's Apply</li>
            <li>code:WELCOMEMMT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offercards;
