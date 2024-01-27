import React, { useEffect } from "react";
import "./buscheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

const Buscheckoutpage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/bookingportals/bus/${id}`);
  }, [id]);
  return (
    <>
      <Stickyheader />
      <div className="booking-heading">
        <h1>Complete your booking</h1>
      </div>

      <div className="busTravellersWrapper">
        <section className="bus-leftSection">
          <div className="busdetails-topdiv">
            <span className="latoBlack font18">{data?.data?.name}</span>
            <span className="latoBold font14">Seat No:U3</span>
          </div>

          <div className="busdetails-seaterdiv">
            <span>{data?.data?.type} Seater</span>
          </div>

          <div className="busdetails-ratingdiv">
            <div className="bus-rating-div">
              <span className="ratingstar-img"></span>
              <p>4.9</p>
            </div>
          </div>

          <div className="busdetails-btmdiv">
            <div className="bus-departure-div">
              <div className="depart-time-date-div">
                <span className="departure-time">
                  {data?.data?.departureTime}
                </span>
                <span className="departure-date">10 Jan' 24, Wed</span>
              </div>

              <div className="depart-place">
                <span>{data?.data?.source}</span>
              </div>
            </div>

            <div className="duration-div">
              <div className="dottedLine"></div>
              <span> 8h 40m</span>
              <div className="dottedLine"></div>
            </div>

            <div className="bus-arrival-div">
              <div className="arrival-time-date-div">
                <span className="arrival-time">{data?.data?.arrivalTime}</span>
                <span className="arrival-date">10 Jan' 24, Wed</span>
              </div>
              <div className="arrive-place">
                <span>{data?.data?.destination}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bus-rightSection">
          <div>
            <p className="fontSize18 blackFont">Price details</p>
          </div>

          <div className="fareBreakWrapper">
            <div className="fareTypeWrap">
              <div className="fareRow">
                <div className="makeFlex  pointer flexOne">
                  <span className="appendRight10 ">
                    <span className="iconPlusImg bgProperties"></span>
                  </span>
                  <span className="fareHeader">Base Fare</span>
                </div>
                <span className="fontSize14 darkText">
                  ₹ {data?.data?.fare}
                </span>
              </div>
            </div>

            <div className="fareTypeWrap">
              <div className="fareRow">
                <div className="makeFlex  pointer flexOne">
                  <span className="appendRight10">
                    <span className="iconPlusImg bgProperties"></span>
                  </span>
                  <span className="fareHeader">Amount</span>
                </div>
                <span className="fontSize14 darkText">
                  ₹ {data?.data?.fare}
                </span>
              </div>
            </div>
          </div>
          
          <div className="fareFooter">
            <p className="totalprice">
              <span className="fontSize16 blackFont">Total Amount</span>
              <span className="fontSize16 blackFont">₹ {data?.data?.fare}</span>
            </p>
          </div>
        </div>
      </div>
      <Userdetails data={data} keyforTrips={"bus"} />
    </>
  );
};

export default Buscheckoutpage;
