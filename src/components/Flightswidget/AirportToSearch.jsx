import React from "react";
import "./airportsearch.css";
import FlightDropdown from "./FlightDropdown";

const AirportToSearch = ({ updateSelectedToAirport, setShowToDropdown }) => {
  return (
    <div className="airportto-search-maindiv">
      <FlightDropdown
        updateSelectedToAirport={updateSelectedToAirport}
        setShowToDropdown={setShowToDropdown}
      />
    </div>
  );
};

export default AirportToSearch;
