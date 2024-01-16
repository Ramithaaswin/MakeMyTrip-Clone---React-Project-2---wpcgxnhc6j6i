import React, { useState } from "react";
import "./offers.css";
import { Container } from "@mui/material";
import { FaLessThan, FaLessThanEqual } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { Button } from "@mui/material";
import OtherWidget from "../otherwidgets/OtherWidget";
import Offercards from "./Offercards";

const Offers = () => {
  const [offerActive, setOfferActive] = useState("alloffers");
  const [showAllOffer, setShowAllOffer] = useState(true);
  const [showFlightOffer, setShowFlightOffer] = useState(false);
  const [showHotelOffer, setShowHotelOffer] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);
  const [showTrainOffer, setShowTrainOffer] = useState(false);
  const [showCabOffer, setShowCabOffer] = useState(false);
  const [showBankOffer, setShowBankOffer] = useState(false);

  const handleShowAllOffer = () => {
    setOfferActive("alloffers");
    setShowHolidays(false);
    setShowAllOffer(true);
    setShowBankOffer(false);
    setShowCabOffer(false);
    setShowFlightOffer(false);
    setShowTrainOffer(false);
    setShowHotelOffer(false);
  };
  const handleShowFlightOffer = () => {
    setOfferActive("flightoffer");
    setShowHolidays(false);
    setShowAllOffer(false);
    setShowBankOffer(false);
    setShowCabOffer(false);
    setShowFlightOffer(true);
    setShowTrainOffer(false);
    setShowHotelOffer(false);
  };
  const handleShowHotelOffer = () => {
    setOfferActive("hoteloffer");
    setShowHolidays(false);
    setShowAllOffer(false);
    setShowBankOffer(false);
    setShowCabOffer(false);
    setShowFlightOffer(false);
    setShowTrainOffer(false);
    setShowHotelOffer(true);
  };
  const handleShowHolidayOffer = () => {
    setOfferActive("holidayoffer");
    setShowHolidays(true);
    setShowAllOffer(false);
    setShowBankOffer(false);
    setShowCabOffer(false);
    setShowFlightOffer(false);
    setShowTrainOffer(false);
    setShowHotelOffer(false);
  };
  const handleShowTrainOffer = () => {
    setOfferActive("trainoffer");
    setShowHolidays(false);
    setShowAllOffer(false);
    setShowBankOffer(false);
    setShowCabOffer(false);
    setShowFlightOffer(false);
    setShowTrainOffer(true);
    setShowHotelOffer(false);
  };
  const handleShowCabOffer = () => {
    setOfferActive("caboffer");
    setShowHolidays(false);
    setShowAllOffer(false);
    setShowBankOffer(false);
    setShowCabOffer(true);
    setShowFlightOffer(false);
    setShowTrainOffer(false);
    setShowHotelOffer(false);
  };
  const handleShowBankOffer = () => {
    setOfferActive("bankoffer");
    setShowHolidays(false);
    setShowAllOffer(false);
    setShowBankOffer(true);
    setShowCabOffer(false);
    setShowFlightOffer(false);
    setShowTrainOffer(false);
    setShowHotelOffer(false);
  };

  return (
    <>
      <Container>
        <div className="offers-main">
          <div className="offers-topdiv">
            <h1>Offers</h1>
            <ul className="offers-topdiv-list">
              <li
                className={offerActive === "alloffers" ? "activeoffer" : ""}
                onClick={handleShowAllOffer}
              >
                All Offers
              </li>
              <li
                className={offerActive === "flightoffer" ? "activeoffer" : ""}
                onClick={handleShowFlightOffer}
              >
                Flights
              </li>
              <li
                className={offerActive === "hoteloffer" ? "activeoffer" : ""}
                onClick={handleShowHotelOffer}
              >
                Hotels
              </li>
              <li
                className={offerActive === "holidayoffer" ? "activeoffer" : ""}
                onClick={handleShowHolidayOffer}
              >
                Holidays
              </li>
              <li
                className={offerActive === "trainoffer" ? "activeoffer" : ""}
                onClick={handleShowTrainOffer}
              >
                Trains
              </li>
              <li
                className={offerActive === "caboffer" ? "activeoffer" : ""}
                onClick={handleShowCabOffer}
              >
                Cabs
              </li>
              <li
                className={offerActive === "bankoffer" ? "activeoffer" : ""}
                onClick={handleShowBankOffer}
              >
                Bank Offers
              </li>
            </ul>

            <div className="ml-24 great-less flex">
              <Button className="">
                <FaLessThan className=" text-blue-500 rounded-s-full  h-6 w-8 " />
              </Button>
              <Button className="">
                <FaGreaterThan className=" text-blue-500 rounded-e-full  h-6 w-8 " />
              </Button>
            </div>
          </div>

          <div className="offers-bottomdiv">
            {showHolidays && <OtherWidget />}
            {showAllOffer && <Offercards />}
            {showBankOffer && <OtherWidget />}
            {showCabOffer && <Offercards />}
            {showFlightOffer && <Offercards/>}
            {showHotelOffer && <Offercards/>}
            {showTrainOffer && <Offercards/>}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Offers;
