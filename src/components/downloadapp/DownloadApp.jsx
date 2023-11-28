import React from "react";
import "./downloadapp.css";
import { Container } from "@mui/material";
import indianflag from "../images/indianflag.png";

const DownloadApp = () => {
  return (
    <>
      <Container>
        <div className="dwnldappmain">
          <div className="dwnldappleftcontainer">
            <div className="left-topdiv">
              <div className="appdwnldiconimg"></div>
              <div className="dwnld-div">
                <h1>Download App Now !</h1>
                <p>
                  Use code <span>WELCOMEMMT</span> and get <span>FLAT 12%</span>{" "}
                  OFF* on your first domestic flight booking
                </p>
              </div>
            </div>

            <div className="left-bottomdiv">
              <div className="phn-nmbr-input">
                <img src={indianflag} alt="flagimg"/>
                <p>+91 - </p>
                <input placeholder="Enter Mobile number" />
              </div>
              <div className="getapplink">GET APP LINK</div>
            </div>
          </div>
          <div className="dwnldapprightcontainer"></div>
        </div>
      </Container>
    </>
  );
};

export default DownloadApp;
