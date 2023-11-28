import React from "react";
import "./flightbottom.css";
import fwad from "../images/fwad.png";
import Offers from "../offers/Offers";
import RecentSearches from "./RecentSearches";
import Fguidance from "./Fguidance";
import DownloadApp from "../downloadapp/DownloadApp";

const FlightwidgetBottom = () => {
  return (
    <div>
      <div className="fw-mainbtmdiv">
        <img className="fw-adv" src={fwad} alt="ad" />
      </div>
      <Offers />
      <RecentSearches />
      <Fguidance />
      <DownloadApp />
    </div>
  );
};

export default FlightwidgetBottom;
