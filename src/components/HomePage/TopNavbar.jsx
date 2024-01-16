import React, { useState } from "react";
import logowhite from "../images/logowhite.png";
import { Link, useNavigate } from "react-router-dom";
import "./topnavbar.css";
import { BsChevronDown } from "react-icons/bs";
import TabforLogin from "../Login/TabforLogin";
import { useAuthContext } from "../../Context/AuthContext";
import { SlLogout } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";

const TopNavbar = () => {
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
    <>
      <div className="topnavbarmaindiv">
        <div className="mmtwhitelogo">
          <Link to="/">
            <img className="whitelogoimage" src={logowhite} alt="logo" />
          </Link>
        </div>
        <div className="middlenavdiv">
          <Link to="/deadclick" className="linktodeadclick">
            <div className="superoffers">
              <div className="superofferlogo">%</div>
              <div className="superofferdescription">
                <h3>super offers</h3>
                <p>Explore great deals & offers</p>
              </div>
            </div>
          </Link>

          <Link to="/deadclick" className="linktodeadclick">
            <div className="mybiz">
              <div className="mybizlogo"></div>
              <div className="mybizdescription">
                <h3>Introducing myBiz</h3>
                <p>Business Travel Solution</p>
              </div>
            </div>
          </Link>

          <Link to="/deadclick" className="linktodeadclick">
            <div className="mytrips">
              <div className="mytripslogo"></div>
              <div className="mytripsdescription">
                <h3>My Trips</h3>
                <p>Manage your bookings</p>
              </div>
            </div>
          </Link>

          <div className="rightnavdiv">
            {authenticated ? (
              <div
                className="afterloginorcreateaccnt"
                onMouseEnter={openMyStuffHover}
                onMouseLeave={closeMyStuffHover}
              >
                <div className="loginlogoafterlogin">
                  <p>T</p>
                </div>
                <div>Hi Traveller</div>
                <BsChevronDown />
                <div
                  className="userDropdown"
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
              <div className="loginorcreateaccnt" onClick={handleOpenLogin}>
                <BsChevronDown />

                <div className="loginlogo"></div>
                <div>Login or Create Account</div>
              </div>
            )}
            <Link to="/deadclick" className="linktodeadclick">
              <div className="languageselector">
                <div className="flaglogo"></div>
                <div>IN|ENG|INR</div>
                
              </div>
            </Link>
          </div>
        </div>
      </div>
      {showLogin && (
        <TabforLogin showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
};

export default TopNavbar;
