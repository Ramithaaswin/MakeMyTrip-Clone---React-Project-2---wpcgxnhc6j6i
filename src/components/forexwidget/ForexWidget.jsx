import React from "react";
import "./forexwidget.css";
import { Container } from "@mui/material";
import travelLoan from "../images/travelLoan.png";
import { FaArrowRightLong } from "react-icons/fa6";

const ForexWidget = () => {
  return (
    <>
      <Container>
        <div className="forexwidgetmaincontainer">
          <img src={travelLoan} alt="tripmoney" />
          <div className="tripmoneyleftdiv">
            <div className="tripmoneylogo"></div>
            <p>
              <span>Forex</span> at best exchange rates delivered at your
              doorstep
            </p>
          </div>
          <div className="ordernowdiv">
            <p>ORDER NOW</p>
            <FaArrowRightLong className="arrowicon" size={25} color="#53b2fe"/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForexWidget;
