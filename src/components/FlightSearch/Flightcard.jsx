import React, { useContext, useEffect, useState } from "react";
import "./flightsearchpage.css";
import "./flightdetails.css";
import useFetch from "../../Hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";
import indigoimg from "../images/indigoimg.png";
import vistaralogo from "../images/vistaralogo.png";
import airindialogo from "../images/airindialogo.png";
import spicejetlogo from "../images/spicejetlogo.png";
import akasaimg from "../images/akasaimg.png";
import airindiaexpressimg from "../images/airindiaexpressimg.png";
import Flightdetails from "./Flightdetails";
import { useAuthContext } from "../../Context/AuthContext";
import LoginContext from "../../Context/LoginContext";
import TabforLogin from "../Login/TabforLogin";

const images = [
  { airline: indigoimg, flightname: "IndiGo" },
  { airline: vistaralogo, flightname: "Vistara" },
  { airline: airindialogo, flightname: " Air India " },
  { airline: spicejetlogo, flightname: "SpiceJet" },
  { airline: akasaimg, flightname: "Akasa Air" },
  { airline: airindiaexpressimg, flightname: " Air India Express " },
];

const Flightcard = ({ data }) => {
  const [isElementVisible, setElementVisibility] = useState({});
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);

  const toggleVisibility = (index) => {
    setElementVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific index
    }));
  };

  return (
    <>
      <div className="flightsearch-btmrightdiv">
        {data?.data?.flights.map((flight, index) => (
          <div key={index} className="flightdetails-maindiv">
            <div className="available-flightdetails">
              <div className="flight-details-div">
                <div className="airlinelogo">
                  <img
                    className=""
                    src={images[index % images.length]?.airline}
                    alt=""
                  />
                </div>
                <div className="airline-nameandno-div">
                  <p>{images[index % images.length]?.flightname}</p>
                  <p>{flight?.flightID}</p>
                </div>
              </div>

              <div className="departure-details-div">
                <p>{flight?.departureTime}</p>
                <p className="ml-3">{flight?.source}</p>
              </div>

              <div className="flyingtime-div">
                <p>0{flight?.duration}h</p>
                <p>{flight?.stops} stop</p>
              </div>

              <div className="arrival-details-div">
                <p>{flight?.arrivalTime}</p>
                <p className="mr-3">{flight?.destination}</p>
              </div>

              <div className="price-details-div">
                <p>₹ {flight?.ticketPrice}</p>
                <p>per adult</p>
              </div>
              <div>
                <p className="seats-left">{flight.availableSeats} seats left</p>

                {authenticated ? (
                  <Link to={`/flightcheckout/${flight._id}`}>
                    <button className="flight-booknow-btn">Book Now</button>
                  </Link>
                ) : (
                  <Link
                    onClick={(e) => {
                      if (!authenticated) {
                        e.preventDefault();
                        setShowLogin(true);
                      }
                    }}
                  >
                    <button className="flight-booknow-btn">Book Now</button>
                  </Link>
                )}
              </div>
            </div>

            <div className="offertext">Get Rs 150 off using MMTBONUS*</div>
            <p
              className="linktoflightdetails"
              onClick={() => toggleVisibility(index)}
            >
              {isElementVisible[index]
                ? "Hide Flight Details"
                : "View Flight Details"}
            </p>
            {isElementVisible[index] && (
              <div>
                <Flightdetails
                  id={flight._id}
                  airline={images[index % images.length]?.airline}
                  flightname={images[index % images.length]?.flightname}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {showLogin && <TabforLogin />}
    </>
  );
};

export default Flightcard;
