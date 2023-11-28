import React from "react";
import Offers from "../offers/Offers";
import ForexWidget from "../forexwidget/ForexWidget";
import fwad from "../images/fwad.png";

const TrainWidgetBottom = () => {
  return (
    <div>
      <div className="fw-mainbtmdiv">
        <img className="fw-adv" src={fwad} alt="ad" />
      </div>
      <Offers />
      <ForexWidget />
    </div>
  );
};

export default TrainWidgetBottom;
