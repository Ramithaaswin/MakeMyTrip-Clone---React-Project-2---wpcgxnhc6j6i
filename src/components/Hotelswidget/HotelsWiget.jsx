import React, { useEffect, useState } from "react";
import "./hotelswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Hotelpopup from "../widgetpopup/Hotelpopup";

const HotelsWiget = () => {
  const [showCheckinDate, setShowCheckinDate] = useState(false);
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(null);
  const [showCheckoutDate, setShowCheckoutDate] = useState(false);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(null);
  const [showHotelPopup, setShowHotelPopup] = useState(false);
  const [hotelPopupData, setHotelPopupData] = useState();

  const handleCheckinIconClick = () => {
    setShowCheckinDate(!showCheckinDate);
  };

  const handlePopupClick=()=>{
    setShowHotelPopup(!hotelPopupData)
  }

  const updateHotelPopupData = () => {
    setHotelPopupData(hotelPopupData);
  };

  const handleCheckinDate = (date) => {
    setSelectedCheckinDate(date);
    setShowCheckinDate(false);

    const cinday = date.getDate();
    const cinmonth = date.toLocaleString("default", { month: "short" });
    const cinyear = date.getFullYear().toString().slice(-2);
    const cindayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("cinday").innerText = cinday;
    document.getElementById("cinmonth").innerText = cinmonth;
    document.getElementById("cinyear").innerText = cinyear;
    document.getElementById("cindayName").innerText = cindayName;
  };

  const handleCheckoutIconClick = () => {
    setShowCheckoutDate(!showCheckoutDate);
  };

  const handleCheckoutDate = (date) => {
    setSelectedCheckoutDate(date);
    setShowCheckoutDate(false);

    const coutday = date.getDate();
    const coutmonth = date.toLocaleString("default", { month: "short" });
    const coutyear = date.getFullYear().toString().slice(-2);
    const coutdayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("coutday").innerText = coutday;
    document.getElementById("coutmonth").innerText = coutmonth;
    document.getElementById("coutyear").innerText = coutyear;
    document.getElementById("coutdayName").innerText = coutdayName;
  };

  return (
    <>
      <div className="hotelwidgetmaindiv">
        <Container>
          <div className="hw-upperdiv">
            <p>
              Book Domestic and International Property Online. To list your
              property Click Here
            </p>
          </div>

          <div className="hw-middlediv">
            <div className="hw-cityname">
              <p>City, Property Name Or Location</p>
              <p>Dubai</p>
              <p>United Arab Emirates</p>
            </div>

            <div className="hw-addcheckin">
              <div className="checkinheaddiv">
                <p className="checkinheading">Check-In</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleCheckinIconClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="cinday"></span>
                <span id="cinmonth"></span>
                <span id="cinyear"></span>
              </p>
              <p id="cindayName"></p>
              {showCheckinDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowCheckinDate(false)}
                >
                  <DatePicker
                    selected={selectedCheckinDate}
                    onChange={handleCheckinDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
            </div>

            <div className="hw-addcheckout">
              <div className="checkoutheaddiv">
                <p className="checkoutheading">Check-out</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleCheckoutIconClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="coutday"></span>
                <span id="coutmonth"></span>
                <span id="coutyear"></span>
              </p>
              <p id="coutdayName"></p>
              {showCheckoutDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowCheckoutDate(false)}
                >
                  <DatePicker
                    selected={selectedCheckoutDate}
                    onChange={handleCheckoutDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
            </div>

            <div className="hw-roomsandguest" onClick={handlePopupClick}>
              <p>Rooms & Guests</p>
              <p>
                <span>1</span> Room <span> 2</span> Adults
              </p>
            </div>
            {showHotelPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowHotelPopup(false)}
              >
                <Hotelpopup
                  updateHotelPopupData={updateHotelPopupData}
                  setShowHotelPopup={setShowHotelPopup}
                />
              </OutsideClickHandler>
            )}
          </div>

          <div className="hw-bottomdiv">
            <p>Trending Searches:</p>
            <span>New York, United States</span>
            <span>Dubai, United Arab Emirates</span>
            <span>Bangkok, Thailand</span>
          </div>

          <Link to="/hotels">
            <Searchbutton />
          </Link>
        </Container>
      </div>
    </>
  );
};

export default HotelsWiget;
