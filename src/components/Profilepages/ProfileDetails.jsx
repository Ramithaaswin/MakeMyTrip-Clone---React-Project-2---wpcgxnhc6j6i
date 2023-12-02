import React from "react";
import "./profiledetails.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container } from "@mui/material";

const ProfileDetails = () => {
  return (
    <div className="profiledetailspage">
      <Stickyheader />

      <div className="profilemaincontainer">
        <Container>
          <ul>
            <li>
              <p>My Account</p>
              <MdKeyboardArrowDown size={25} />
            </li>
            <li>
              <MdKeyboardArrowRight size={25} />
              <p>My Profile</p>
            </li>
          </ul>

          <div className="profiledetailsmaindiv">
            <div className="profileandpagenav"></div>
            <div className="infomaindiv"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProfileDetails;
