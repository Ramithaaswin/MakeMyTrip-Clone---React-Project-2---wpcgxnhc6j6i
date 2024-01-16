import React, { useState } from "react";
import "./widgetpopup.css";

const Hotelpopup = () => {
  const [count, setCount] = useState("1");
  return (
    <>
      <div className="rmsGst">
        <div className="rmsGst-hw">
          <p>Rooms</p>
          <div className="guestCounter">
            <span className="plus-minus">-</span>
            {count}
            <span className="plus-minus">+</span>
          </div>
        </div>
        <div className="rmsGst-hw">
          <p>Guests</p>
          <div className="guestCounter">
            <span className="plus-minus">-</span>
            {count}
            <span className="plus-minus">+</span>
          </div>
        </div>
        <p className="guestnumber-text">
          Please provide right number of Guests for best options and prices.
        </p>
        <button className="travellerApplyBtn">Apply</button>
      </div>
    </>
  );
};

export default Hotelpopup;
