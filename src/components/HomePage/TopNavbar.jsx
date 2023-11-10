import React from "react";
import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";
import "./topnavbar.css";
// import offer from "../images/offer.png";

const TopNavbar = () => {
  return (
    <>
      <div className="topnavbarmaindiv">
        <div className="mmtwhitelogo">
          <Link to="/">
            <img className="whitelogoimage" src={logowhite} alt="logo" />
          </Link>
        </div>
        <div className="middlenavdiv">
          <div className="superoffers">
            <h3>super offers</h3>
            <p>Explore great deals & offers</p>
          </div>
          <div className="mybiz">
            <h3>Introducing myBiz</h3>
            <p>Business Travel Solution</p>
          </div>
          <div className="mytrips">
            <h3>My Trips</h3>
            <p>Manage your bookings</p>
          </div>
          <div className="rightnavdiv">
            <div className="loginorcreateaccnt">
              <div>Login or Create Account</div>
            </div>
            <div className="languageselector">
              <div>IN|ENG|INR</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
