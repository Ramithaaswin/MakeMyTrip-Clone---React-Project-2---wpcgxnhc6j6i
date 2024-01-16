import React, { useState } from "react";
import "./busessearch.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import BusSeatPicker from "./BusSeatPicker";

const BusesSearch = () => {
  const [isElementVisible, setElementVisibility] = useState(false);
  const [sortActive, setSortActive] = useState("relevance");

  const toggleVisibility = () => {
    setElementVisibility(!isElementVisible);
  };

  const handleRelevanceList = () => {
    setSortActive("relevance");
  };
  const handleFastestList = () => {
    setSortActive("fastest");
  };
  const handleCheapestList = () => {
    setSortActive("cheapest");
  };
  const handleRatingList = () => {
    setSortActive("rating");
  };
  const handleArrivalList = () => {
    setSortActive("arrival");
  };
  const handleDepartureList = () => {
    setSortActive("departure");
  };

  return (
    <div className="busessearch">
      <Stickyheader />

      <div className="busessearch-headerdiv">
        <div>
          <p>
            FROM <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">Bengaluru,Karnataka</p>
        </div>
        <div>
          <p>
            TO <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">Hyderabad,Telangana</p>
        </div>
        <div>
          <p>
            DEPART <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">Mon,Feb 12,2024</p>
        </div>
        <button className="bussearch-searchbtn">SEARCH</button>
      </div>

      <div className="busessearch-bottomdiv">
        <div className="bs-bottom-leftdiv">
          <div className="bs-filters-heading">
            <h3>Filters</h3>
          </div>

          <div className="AC-filter-div">
            <p className="ac-filter-div-title">AC</p>
            <div className="ac-category-div">
              <div className="ac-category">
                <div className="ac-img"></div>
                <p>AC</p>
              </div>
              <div className="non-ac-catogory">
                <div className="nonac-img"></div>
                <p>Non AC</p>
              </div>
            </div>
          </div>

          <div className="departure-time-div">
            <p className="departure-time-title">Departure Time</p>
            <div className="departuretime-limit-maindiv">
              <div>
                <div className="dt-6amto11pm-img"></div>
                <p>6 AM to 11 AM</p>
              </div>
              <div>
                <div className="dt-11amto6pm-img"></div>
                <p>11 AM to 6 PM</p>
              </div>
              <div>
                <div className="dt-6pmto11pm-img"></div>
                <p>6 PM to 11 PM</p>
              </div>
              <div>
                <div className="dt-11pmto6am-img"></div>
                <p>11 PM to 6 AM</p>
              </div>
            </div>
          </div>

          <div className="arrival-time-div">
            <p className="arrival-time-title">Arrival Time</p>
            <div className="arrivaltime-limit-maindiv">
              <div>
                <div className="at-6amto11pm-img"></div>
                <p>6 AM to 11 AM</p>
              </div>
              <div>
                <div className="at-11amto6pm-img"></div>
                <p>11 AM to 6 PM</p>
              </div>
              <div>
                <div className="at-6pmto11pm-img"></div>
                <p>6 PM to 11 PM</p>
              </div>
              <div>
                <div className="at-11pmto6am-img"></div>
                <p>11 PM to 6 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bs-bottom-rightdiv">
          <div className="bus-sortby-div">
            <p>sort by</p>
            <ul>
              <li
                className={sortActive == "relevance" ? "sortactive" : ""}
                onClick={handleRelevanceList}
              >
                Relevance
              </li>
              <li
                className={sortActive == "fastest" ? "sortactive" : ""}
                onClick={handleFastestList}
              >
                Fastest
              </li>
              <li
                className={sortActive == "cheapest" ? "sortactive" : ""}
                onClick={handleCheapestList}
              >
                Cheapest
              </li>
              <li
                className={sortActive == "rating" ? "sortactive" : ""}
                onClick={handleRatingList}
              >
                Rating
              </li>
              <li
                className={sortActive == "arrival" ? "sortactive" : ""}
                onClick={handleArrivalList}
              >
                Arrival
              </li>
              <li
                className={sortActive == "departure" ? "sortactive" : ""}
                onClick={handleDepartureList}
              >
                Departure
              </li>
            </ul>
          </div>

          <div className="busdetails-maindiv">
            <div className="busdetails-topdiv">
              <div className="bdtd-busdetails">
                <div className="busnamedetails-div">
                  <p>ANAGHA TRAVELS</p>
                  <p>A/C Seater / Sleeper (2+1)</p>
                </div>
                <div className="bustimedetails-div">
                  <div className="busdeparttime-div">
                    <span>21:00</span>
                    <span>18 JAN</span>
                  </div>
                  <div className="bustime-seperationline"></div>
                  <div className="bus-duraion">09hrs 00mins</div>
                  <div className="bustime-seperationline"></div>
                  <div className="busarrivaltime-div">
                    <span>06:00</span>
                    <span>19 JAN</span>
                  </div>
                </div>
                <div className="busfare-div">₹ 1600</div>
              </div>
              <div className="bus-rating-seats">
                <div className="bus-rating-div">
                  <span className="ratingstar-img"></span>
                  <p>4.9</p>
                </div>
                <p className="seat-number">29 seats</p>
              </div>
            </div>

            <div className="busdetails-bottomdiv">
              <div>
                <span>Amenities</span>
                <MdKeyboardArrowDown className="amenities-downicon" />
              </div>

              <button
                onClick={toggleVisibility}
                className="bus-selectseats-btn"
              >
                {isElementVisible ? "HIDE SEAT" : "SELECT SEAT"}
              </button>
            </div>
          </div>
          {isElementVisible && (
            <div>
              <BusSeatPicker />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusesSearch;
