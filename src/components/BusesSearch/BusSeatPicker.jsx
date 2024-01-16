import React from "react";
import "./busseatpicker.css";
import { TbArmchair } from "react-icons/tb";
import { Link } from "react-router-dom";

const BusSeatPicker = () => {
  return (
    <div className="bus-seatPicker-container">
      <div className="seat-picker-div">
        <p className="seat-picker-header">Select Seats</p>
        <div style={{ width: "390px" }}>
          <div
            style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
          ></div>
          <div
            style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
          ></div>
        </div>
        <div className="seats-in-bus">
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
          <div>
            <div>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
              <span className="seat-icon-bus"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="point-picker-div">
        <div className="pointpicker-top-div">
          <p className="point-picker-header">Select Pickup & Drop Points</p>
          <div className="child-board-drop">
            <div className="br-dr-box">
              <p className="br-dr-text">Pickup Point</p>
              <div>
                <p className="time-br-dp">21:40,10 JAN</p>
                <p className="add-br-dp">
                  Gandhi Maidan BANKIPORE BUS DEPOT,GANDHI MAIDAN,NEAR KARGIL
                  CHOWK
                </p>
              </div>
            </div>
            <div className="br-dr-box">
              <p className="br-dr-text">Dropping Point</p>
              <div>
                <p className="time-br-dp">21:40,10 JAN</p>
                <p className="add-br-dp">
                  Gandhi Maidan BANKIPORE BUS DEPOT,GANDHI MAIDAN,NEAR KARGIL
                  CHOWK
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="seatconfirm-and-continuebtn">
          <div className="seats-price-div">
            <p className="selectedseats-text">Selected Seats</p>
            <p className="selected-seat-price">₹ 1600</p>
          </div>
          <Link to="/buscheckout" className="linktobuscheckout">
            <button className="seat-pick-btn">CONTINUE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusSeatPicker;
