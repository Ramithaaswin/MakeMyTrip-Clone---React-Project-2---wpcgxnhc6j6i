import React from "react";
import "./singlehotelpage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import ImageCarousel from "./ImageCarousel";
import hotelroomsize from "../images/hotelroomsize.png";
import hotelroombed from "../images/hotelroombed.png";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleHotelPage = () => {
  return (
    <>
      <Stickyheader />
      <div className="singlehotelpage-maindiv">
        <div className="singlehotel-headerdiv">
          <div>
            <p>
              CITY, AREA OR PROPERTY <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">Bengaluru</p>
          </div>
          <div>
            <p>
              CHECK-IN <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">Wed,6 Dec 2023</p>
          </div>
          <div>
            <p>
              CHECK-OUT <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">Tuesday,12 Dec 2023</p>
          </div>
          <div>
            <p>
              ROOMS & GUESTS
              <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">1 Room,2 Adults</p>
          </div>
          <button>SEARCH</button>
        </div>

        <div className="hoteldetails-maindiv">
          <div className="topnav-text">
            <h6 className="home-text">Home</h6>
            <TbMathGreater className="left-arrow-icon" />
            <h6 className="home-text">Hotels</h6>
            <TbMathGreater className="left-arrow-icon" />
            <h6 className="hotelname-text">Dr. Rajkumar International Hotel</h6>
          </div>

          {/* <div className="hotel-image-div"> */}
          <ImageCarousel />
          {/* </div> */}

          <div className="hotel-name-div">
            <h1>Dr. Rajkumar International Hotel</h1>
            <p>Gandhi Nagar, Bangalore</p>
            <div className="bus-rating-div">
              <span className="ratingstar-img"></span>
              <p>4.9</p>
            </div>
          </div>

          <div className="prmDtl__bottom">
            <ul>
              <li>
                <a className="navLink">OVERVIEW</a>
              </li>
              <li>
                <a className="navLink">ROOMS</a>
              </li>
              <li>
                <a className="navLink">AMENITIES</a>
              </li>
              <li>
                <a className="navLink">PROPERTY RULES</a>
              </li>
            </ul>
          </div>

          <div className="rooms-maindiv">
            <h1 className="abouthotel-head">About The Roa Hotel</h1>
            <span className="abouthotel-text">
              Standing in the bustling city of Mumbai, The Roa Hotel is an
              affordable stay choice featuring guest-friendly amenities and
              vicinity to famous landmarks.Bask in the comfort of rooms,
              furnished with elegant decor with an expansive living area.
            </span>

            <p className="rooms-heading">Select Rooms</p>
            <div className="roomtype-head-div">
              <div className="roomtype-dropdown">3 ROOM TYPES</div>
              <div className="rooms-option-head">OPTIONS</div>
              <div className="rooms-price-head">PRICE</div>
            </div>
            <div className="suiteroom-details-maindiv">
              <div className="suite-aboutroom">
                <h2>Room name</h2>
                <div className="roomsize-div">
                  <img src={hotelroomsize} alt="room" className="roomsizeimg" />
                  <p>roomsize sq.ft</p>
                </div>
                <div className="roombed-div">
                  <img src={hotelroombed} alt="bed" className="bedimg" />
                  <p>bed details</p>
                </div>
              </div>

              <div className="suite-optionsdiv">
                <p className="cancellation-head">Room With Free Cancellation</p>
                <div className="cancellation-criteria-div">
                  <div className="tickmark-icon"></div>
                  <p>cancellationPolicy</p>
                </div>
                <div className="meals-div">
                  <div className="tickmark-icon"></div>
                  <p>No meals included</p>
                </div>
              </div>

              <div className="suite-pricediv">
                <p>Per Night</p>
                <p>₹ 1,800</p>
                <p>+₹ 473 taxes & fees</p>

                <Link to="/hotelcheckout">
                  <button className="selectroom-btn">SELECT ROOM</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHotelPage;
