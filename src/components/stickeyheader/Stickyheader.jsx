import React, { useState } from "react";
import "./stickyheader.css";
import logoblue from "../images/logoblue.png";
import { BsChevronDown } from "react-icons/bs";
import { useAuthContext } from "../../Context/AuthContext";
import TabforLogin from "../Login/TabforLogin";
import { Link, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";

export const Stickyheader = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { authenticated, logoutUser } = useAuthContext();

  const openMyStuffHover = () => {
    setIsHovered(true);
  };
  const closeMyStuffHover = () => {
    setIsHovered(false);
  };

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleSignout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="stickyheaderpage">
      <div className="stickyheadermaindiv">
        <Link to="/">
          <div className="bluelogodiv">
            <img src={logoblue} alt="mmtbluelogo" />
          </div>
        </Link>
        <Link to="/" className="sticky-linktohome">
          <div className="stickynavlinks">
            <ul className="navlinkslist">
              <li>
                <div className="sh-flightsimg"></div>
                <div>Flights</div>
              </li>
              <li>
                <div className="sh-hotelimg"></div>
                <div>Hotels</div>
              </li>
              <li>
                <div className="sh-homestaysimg"></div>
                <div>Homestays & Villas</div>
              </li>
              <li>
                <div className="sh-holidayimg"></div>
                <div>Holiday Packages</div>
              </li>
              <li>
                <div className="sh-trainimg"></div>
                <div>Trains</div>
              </li>
              <li>
                <div className="sh-busesimg"></div>
                <div>Buses</div>
              </li>
              <li>
                <div className="sh-cabsimg"></div>
                <div>Cabs</div>
              </li>
              <li>
                <div className="sh-foreximg"></div>
                <div>Forex Card & Currency</div>
              </li>
              <li>
                <div className="sh-travelinsuranceimg"></div>
                <div>Travel Insurance</div>
              </li>
            </ul>
          </div>
        </Link>

        {authenticated ? (
          <div
            className="sh-afterloginorcreateaccnt"
            onMouseEnter={openMyStuffHover}
            onMouseLeave={closeMyStuffHover}
          >
            <div className="sh-loginlogoafterlogin">
              <p>T</p>
            </div>
            <div>Hi Traveller</div>
            <BsChevronDown />
            <div
              className="sh-userDropdown"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <Link to="/mytrips" className="linktomytrips">
                <li className="fadeIndown">
                  <SlHandbag className="mt-1" size={15} />
                  <h2>My Trips</h2>
                </li>
              </Link>
              <li className="logoutbtn" onClick={handleSignout}>
                <SlLogout className="mt-1" size={15} />
                <h2>Logout</h2>
              </li>
            </div>
          </div>
        ) : (
          <div className="sh-logindropdown" onClick={handleOpenLogin}>
            <div className="sh-loginlogo">
              <div className="sh-loginlogowhite"></div>
            </div>
            <div className="login-para">
              Login or <br /> Create Account
            </div>
          </div>
        )}
        {showLogin && (
          <TabforLogin showLogin={showLogin} setShowLogin={setShowLogin} />
        )}

        <div className="sh-countryselectmaindiv">
          <div className="country">Country</div>
          <div className="sh-bottomdiv">
            <div className="sh-flag"></div>
            <span className="sh-countryindia">India</span>
            <span>{/* <BsChevronDown size={10} color="#008cff" /> */}</span>
          </div>
        </div>
        <div className="sh-languageselector">
          <div className="sh-language">Language</div>
          <div className="sh-language-btm">
            <span>ENG</span>
            {/* <BsChevronDown size={10} color="#008cff" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
