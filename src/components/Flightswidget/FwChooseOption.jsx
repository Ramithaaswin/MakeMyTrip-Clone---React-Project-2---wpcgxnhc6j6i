import React from "react";
import "./fwchooseoption.css";
import wheretogo from "../images/wheretogo.png";
import insurance from "../images/insurance.png";
import exploreif from "../images/exploreif.png";
import mice from "../images/mice.png";
import giftcard from "../images/giftcard .png";
import fwad from "../images/fwad.png"

const FwChooseOption = () => {
  return (
    <>
      <div className="fwchoose-maindiv">
        <div className="fwchoosewtg">
          <img src={wheretogo} alt="wtgimg" />
          <p>Where2Go</p>
        </div>

        <div className="fwchooseinsurance">
          <img src={insurance} alt="insuranceimg" />
          <div>
            <p>Insurance</p>
            <p>For International Trips</p>
          </div>
        </div>

        <div className="fwchooseexploreif">
          <img src={exploreif} alt="exploreifimg" />
          <div>
            <p>Explore International Flights</p>
            <p>Cheapest Flights to Paris, Bali, Tokyo & more</p>
          </div>
        </div>

        <div className="fwchoosemice">
          <img src={mice} alt="miceimg" />
          <div>
            <p>MICE</p>
            <p>Offsites, Events & Meetings</p>
          </div>
        </div>

        <div className="fwchoosegiftcard">
            <img src={giftcard} alt="giftcardimg"/>
            <p>Gift Cards</p>
        </div>
      </div>
      {/* <img src={fwad} alt="ad"/> */}
    </>
  );
};

export default FwChooseOption;
