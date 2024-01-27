import React, { useEffect } from "react";
import "./traincheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

const Traincheckoutpage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/bookingportals/train/${id}`);
  }, [id]);
  return (
    <>
      <Stickyheader />
      <div className="travellerInfo">
        <div className="travellerHead">
          <h2>Select Travellers</h2>
        </div>

        <div className="railTravellersContainer">
          <section className="train-details">
            <div className="train-name-time">
              <h3 className="train-name-head">{data?.data?.trainName}</h3>

              <span className="train-number">{data?.data?.trainNumber}</span>

              <div className="train-time-duration-div">
                <div className="source-time-place">
                  <span className="train-depart-time">
                    {data?.data?.departureTime}
                  </span>
                  <span className="train-source">{data?.data?.source}</span>
                </div>

                <span className="bdrTop-left"></span>
                <div className="makeFlex column appendRight20">
                  <span className="train-duration">10 hrs 48 mins</span>
                </div>
                <span className="bdrTop-right"></span>

                <div className="destination-time-place">
                  <span className="train-arrive-time">
                    {data?.data?.arrivalTime}
                  </span>
                  <span className="train-destination">
                    {data?.data?.destination}
                  </span>
                </div>
              </div>
            </div>

            <div className="availability-and-boardsttn makeFlex makeRelative">
              <div className="availability-status-main-div">
                <h3 className="avail-head">Availability Status</h3>
                <div className="trStatusBlock">
                  <span className="coach-type">SL</span>
                  <span className="orangeText">RLWL40/WL33</span>
                  <p className="update-time">Updated 11 hrs ago</p>
                </div>
              </div>
              <div className="boardingstation-maindiv">
                <h3 className="boardsttn-head">Your Boarding Station</h3>
                <p className="boardsttn-ptag">
                  {data?.data?.source}- {data?.data?.departureTime}
                </p>
              </div>
            </div>
          </section>

          <section className="fare-summary-section">
            <section className="train-fareSummary">
              <div className="fare-summary-head-div">FARE SUMMARY</div>
              <div className="fare-main-div">
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
                      <span className="fareHeader">Extra Charges</span>
                    </div>
                    <span className="fontSize14 darkText">₹ 0</span>
                  </div>
                </div>
              </div>
              <div className="fareFooter">
                <p className="payNowWrapper">
                  <span className="fontSize16 blackFont">Total Price</span>
                  <span className="fontSize16 blackFont">
                    ₹ {data?.data?.fare}
                  </span>
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
      <Userdetails data={data} keyforTrips={"train"} />
    </>
  );
};

export default Traincheckoutpage;
