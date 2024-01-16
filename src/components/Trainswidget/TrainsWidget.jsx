import React, { useState } from "react";
import "./trainswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Trainpopup from "../widgetpopup/Trainpopup";

const TrainsWidget = () => {
  const [selectTrainOption, setselectTrainOption] = useState("");
  const [showTravelDate, setShowTravelDate] = useState(false);
  const [selectedTravelDate, setSelectedTravelDate] = useState(null);
  const [showTrainPopup, setShowTrainPopup] = useState(false);
  const [trainPopupData, setTrainPopupData] = useState();
  const [locations, setLocations] = useState({
    from: "New Delhi",
    to: "Kanpur",
    trainStationB: "NDLS, New Delhi Railway Station",
    trainStationA: "CNB, Kanpur Central",
  });
  const handleSwap = () => {
    setLocations({
      from: locations.to,
      to: locations.from,
      trainStationA: locations.trainStationB,
      trainStationB: locations.trainStationA,
    });
  };
  const handlePopupClick = () => {
    setShowTrainPopup(!showTrainPopup);
  };

  const handleChange = (e) => {
    setselectTrainOption(e.target.value);
  };

  const updateTrainPopupData = () => {
    setTrainPopupData(trainPopupData);
  };

  const handleTravelIconClick = () => {
    setShowTravelDate(!showTravelDate);
  };

  const handleTravelDate = (date) => {
    setSelectedTravelDate(date);
    setShowTravelDate(false);

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
      <div className="trainswidgetmaindiv">
        <Container>
          <div className="tw-upperdiv">
            <p>Book Train Tickets</p>
          </div>

          <div className="tw-bottomdiv">
            <div className="tw-from">
              <p>From</p>
              <p>{locations.from}</p>
              <p>{locations.trainStationB}</p>
            </div>

            <div class="new-div">
            <span className="fltSwipCircle" onClick={handleSwap}>
              <span className="flightsSprite"></span>
            </span>
            <div className="tw-to">
              <p>To</p>
              <p>{locations.to}</p>
              <p>{locations.trainStationA}</p>
            </div>
            </div>

            <div className="tw-traveldate">
              <div className="traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleTravelIconClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
              {showTravelDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowTravelDate(false)}
                >
                  <DatePicker
                    selected={selectedTravelDate}
                    onChange={handleTravelDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
            </div>

            <div className="tw-class" onClick={handlePopupClick}>
              <p>class</p>
              <p>ALL</p>
              <p>All class</p>
            </div>

            {showTrainPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowTrainPopup(false)}
              >
                <Trainpopup
                  updateTrainPopupData={updateTrainPopupData}
                  setShowTrainPopup={setShowTrainPopup}
                />
              </OutsideClickHandler>
            )}
          </div>
          <Link to="/trains">
            <div className="tw-searchbtndiv">
              <Searchbutton />
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default TrainsWidget;
