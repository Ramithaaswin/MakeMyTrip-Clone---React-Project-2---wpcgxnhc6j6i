import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./flightwidgetmain.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FwChooseOption from "./FwChooseOption";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, createSearchParams } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Flightpopup from "../widgetpopup/Flightpopup";
import AirportSearchDropdown from "./AirportSearchDropdown";

const FlightsWidgetMain = () => {
  const [searchData, setSearchData] = useState({
    source: "PNQ",
    destination: "JAI",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });

  const [showFightPopup, setShowFlightPopup] = useState(false);
  const [showDepartureDate, setShowDepartureDate] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [travellers, setTravellers] = useState(1);
  const [travellerclass, setTravellerClass] = useState("Economy");

  const [fromAirportData, setFromAirportData] = useState({
    city: "Pune",
    iata_code: "PNQ",
    name: "Pune Airport",
  });
  const [toAirportData, setToAirportData] = useState({
    city: "Jaipur",
    iata_code: "JAI",
    name: "Jaipur International Airport",
  });

  const [locations, setLocations] = useState({
    from: "Pune",
    to: "Jaipur",
    airportB: "Pune Airport",
    airportA: "Jaipur International Airport",
  });

  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "short" })
  );
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString().slice(-2)
  );
  const [selectedDayName, setSelectedDayName] = useState(
    new Date().toLocaleDateString("default", { weekday: "long" })
  );

  const handleSwap = () => {
    setLocations((prevLocations) => ({
      from: prevLocations.to,
      to: prevLocations.from,
      airportA: prevLocations.airportB,
      airportB: prevLocations.airportA,
    }));

    // Swap the airport data
    setFromAirportData(() => ({
      ...toAirportData,
      iata_code: toAirportData.iata_code,
      name: toAirportData.name,
    }));

    setToAirportData(() => ({
      ...fromAirportData,
      iata_code: fromAirportData.iata_code,
      name: fromAirportData.name,
    }));
  };

  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePopupClick = () => {
    setShowFlightPopup(!showFightPopup);
  };

  const handleDepartureIconClick = () => {
    setShowDepartureDate(!showDepartureDate);
  };

  const handleDepartureDate = (date) => {
    setSelectedDepartureDate(date);
    setShowDepartureDate(false);

    // Update the state with the selected date details
    setSelectedDay(date.getDate());
    setSelectedMonth(date.toLocaleString("default", { month: "short" }));
    setSelectedYear(date.getFullYear().toString().slice(-2));
    setSelectedDayName(date.toLocaleDateString("default", { weekday: "long" }));

    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date);
  };

  return (
    <div className="flightwidget">
      <div className="flightwidgetmaindiv">
        <Container>
          <div className="fw-upperdiv">
            <p>Book International and Domestic Flights</p>
          </div>

          <div className="fw-middlediv">
            <AirportSearchDropdown
              handleSearchData={handleSearchData}
              field={"From"}
              airportData={fromAirportData}
              setAirportData={setFromAirportData}
            />
            <div className="new-div">
              <span className="fltSwipCircle" onClick={handleSwap}>
                <span className="flightsSprite"></span>
              </span>

              <AirportSearchDropdown
                handleSearchData={handleSearchData}
                field={"To"}
                airportData={toAirportData}
                setAirportData={setToAirportData}
              />
            </div>

            <div className="fw-departurediv" onClick={handleDepartureIconClick}>
              <div className="departureheaddiv">
                <p className="departureheading">Departure</p>
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </div>
              <p>
                <span>{selectedDay}</span>
                <span>{selectedMonth}</span>
                <span>{selectedYear}</span>
              </p>
              <p>{selectedDayName}</p>
              {showDepartureDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowDepartureDate(false)}
                >
                  <DatePicker
                    selected={selectedDepartureDate}
                    onChange={handleDepartureDate}
                    inline
                    minDate={new Date()}
                  />
                </OutsideClickHandler>
              )}
            </div>

            <div className="fw-travellersclassdiv" onClick={handlePopupClick}>
              <p className="flex">
                Travellers & class
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </p>
              <p>
                <span>{travellers}</span> Traveller
              </p>
              <p>{travellerclass}</p>
            </div>
            {showFightPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowFlightPopup(false)}
              >
                <Flightpopup
                  travellers={travellers}
                  setravellers={setTravellers}
                  travellerclass={travellerclass}
                  setTravellerClass={setTravellerClass}
                  // updateFlightPopupData={updateFlightPopupData}
                  setShowFightPopup={setShowFlightPopup}
                />
              </OutsideClickHandler>
            )}
          </div>

          <div className="fw-bottomdiv">
            <div className="fw-trendingsearches">
              <p>Trending Searches:</p>
              <p>
                <span>Chennai</span>
                <FaLongArrowAltRight color="#0084ff" />
                <span>Dubai</span>
              </p>
              <p>
                <span>Delhi</span>
                <FaLongArrowAltRight color="#0084ff" />
                <span>Kolkata</span>
              </p>
            </div>
          </div>
          <Link to={`/flights?${createSearchParams(searchData)}`}>
            <Searchbutton />
          </Link>
          <div className="fw-exploremore">
            <MdKeyboardDoubleArrowDown size={20} />
            <p>Explore More</p>
            <MdKeyboardDoubleArrowDown size={20} />
          </div>
          <FwChooseOption />
        </Container>
      </div>
    </div>
  );
};

export default FlightsWidgetMain;
