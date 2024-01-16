import React, { useState } from "react";
import "./buseswidget.css";
import { Container } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchbutton from "../Searchbutton/Searchbutton";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const BusesWidget = () => {
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [locations, setLocations] = useState({
    from: "Delhi,Delhi",
    to: "Kanpur,Uttar Pradesh",
    BusStandB: "India",
    BusStandA: "India",
  });

  const handleSwap = () => {
    setLocations({
      from: locations.to,
      to: locations.from,
      BusStandA: locations.BusStandB,
      BusStandB: locations.BusStandA,
    });
  };

  const handleTravelDateonClick = () => {
    setShowDate(!showDate);
  };
  const handleTravelDate = (date) => {
    setSelectedDate(date);
    setShowDate(false);

    const tday = date.getDate();
    const tmonth = date.toLocaleString("default", { month: "short" });
    const tyear = date.getFullYear().toString().slice(-2);
    const tdayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("tday").innerText = tday;
    document.getElementById("tmonth").innerText = tmonth;
    document.getElementById("tyear").innerText = tyear;
    document.getElementById("tdayName").innerText = tdayName;
  };

  return (
    <>
      <div className="buseswidgetmaindiv">
        <Container>
          <p className="bookbus-text">Book your bus ticket here</p>
          <div className="bw-detailsdiv">
            <div className="bw-from">
              <p>From</p>
              <p>{locations.from}</p>
              <p>{locations.BusStandB}</p>
            </div>

            <div className="new-div">
              <span className="fltSwipCircle" onClick={handleSwap}>
                <span className="flightsSprite"></span>
              </span>
              <div className="bw-to">
                <p>To</p>
                <p>{locations.to}</p>
                <p>{locations.BusStandA}</p>
              </div>
            </div>

            <div className="bw-traveldate">
              <div className="bw-traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleTravelDateonClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
              {showDate && (
                <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleTravelDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
            </div>
          </div>
          <Link to="/buses">
            <div className="bw-searchbtndiv">
              <Searchbutton />
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default BusesWidget;
