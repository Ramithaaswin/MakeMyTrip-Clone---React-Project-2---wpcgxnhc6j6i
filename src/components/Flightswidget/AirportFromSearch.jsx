import React from "react";
import FlightDropdown from "./FlightDropdown";
import "./airportsearch.css";

const AirportFromSearch = ({ updateSelectedFromAirport, setShowFromDropdown }) => {
  return (
    <div className="airportfrom-search-maindiv">
      <FlightDropdown
        updateSelectedFromAirport={updateSelectedFromAirport}
        setShowFromDropdown={setShowFromDropdown}
      />
    </div>
  );
};

export default AirportFromSearch;
