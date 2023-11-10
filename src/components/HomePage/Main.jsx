import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import TopNavbar from "./TopNavbar";
import { Container } from "@mui/material";

const Main = () => {
  return (
    <>
      <div className="mainpage">
        <Container>
          <TopNavbar />
        </Container>
      </div>
    </>
  );
};

export default Main;
