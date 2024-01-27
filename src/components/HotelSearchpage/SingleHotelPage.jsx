import React, { useEffect } from "react";
import "./singlehotelpage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import ImageCarousel from "./ImageCarousel";
import hotelroomsize from "../images/hotelroomsize.png";
import hotelroombed from "../images/hotelroombed.png";
import { TbMathGreater } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import HotelpropertyRules from "./HotelpropertyRules";

const SingleHotelPage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/bookingportals/hotel/${id}`);
  }, [id]);

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
            <h6 className="hotelname-text">{data?.data?.name}</h6>
          </div>

          <ImageCarousel data={data} />

          <div className="hotel-name-div">
            <h1>{data?.data?.name}</h1>
            <p>{data?.data?.location}</p>
            <div className="bus-rating-div">
              <span className="ratingstar-img"></span>
              <p>{data?.data?.rating}</p>
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
            <h1 className="abouthotel-head">About the {data?.data?.name}</h1>
            <span className="abouthotel-text">
              Standing in the bustling city of {data?.data?.location}, The{" "}
              {data?.data?.name} is an affordable stay choice featuring
              guest-friendly amenities and vicinity to famous landmarks.Bask in
              the comfort of rooms, furnished with elegant decor with an
              expansive living area.
            </span>

            <p className="rooms-heading">Select Rooms</p>
            <div className="roomtype-head-div">
              <div className="roomtype-dropdown">3 ROOM TYPES</div>
              <div className="rooms-option-head">OPTIONS</div>
              <div className="rooms-price-head">PRICE</div>
            </div>
            {data?.data?.rooms &&
              data?.data?.rooms.map((room, index) => (
                <div key={room._id} className="suiteroom-details-maindiv">
                  <div className="suite-aboutroom">
                    <h2>{room.roomType} Room</h2>
                    <div className="roomsize-div">
                      <img
                        src={hotelroomsize}
                        alt="room"
                        className="roomsizeimg"
                      />
                      <p>{room.roomSize} sq.ft</p>
                    </div>
                    <div className="roombed-div">
                      <img src={hotelroombed} alt="bed" className="bedimg" />
                      <p>{room.bedDetail}</p>
                    </div>
                  </div>

                  <div className="suite-optionsdiv">
                    <p className="cancellation-head">
                      Room With Free Cancellation
                    </p>
                    <div className="cancellation-criteria-div">
                      <div className="tickmark-icon"></div>
                      <p>{room.cancellationPolicy}</p>
                    </div>
                    <div className="meals-div">
                      <div className="tickmark-icon"></div>
                      <p>No meals included</p>
                    </div>
                  </div>

                  <div className="suite-pricediv">
                    <p>Per Night</p>
                    <p>₹{room.costPerNight}</p>
                    <p>+₹ {room.costDetails.TaxesAndFees} taxes & fees</p>

                    <Link to={`/hotelcheckout/${data?.data?._id}`}>
                      <button className="selectroom-btn">SELECT ROOM</button>
                    </Link>
                  </div>
                </div>
              ))}

            <div>
              <h2 className="amenities-mainhead">
                Amenities at {data?.data?.name}
              </h2>
              <h2 className="highlighted-amenities-subhead">
                Highlighted Amenities
              </h2>
              <div className="high-borderline"></div>
              {data?.data?.amenities &&
                data?.data?.amenities.map((amenty, index) => (
                  <ul key={index} className="amenities-ul">
                    <li>{amenty}</li>
                  </ul>
                ))}
            </div>

            <HotelpropertyRules data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHotelPage;
