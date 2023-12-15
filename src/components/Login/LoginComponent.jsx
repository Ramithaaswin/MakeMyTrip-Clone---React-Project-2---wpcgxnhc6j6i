// import React from "react";
import { useState } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const LoginComponent = ({ showLogin, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const FetchLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/bookingportals/login",
      {
        method: "POST",
        Body: JSON.stringify({
          email: "userEmail",
          password: "userPassword",
          appType: "bookingportals",
        }),
        Headers: { projectID: "wpcgxnhc6j6i" },
      }
    );
    const info = await response.json();
  };

  return (
    <>
      <div className="background-blur">
        <div className="loginmaindiv">
          <div className="logintopdiv">
            <button>
              <p>PERSONAL ACCOUNT</p>
            </button>
          </div>
          <form
            onSubmit={(e) => {
              FetchLogin(e);
            }}
          >
            <label>Email or Mobile Number</label>
            <input
              type="text"
              placeholder="Enter email or mobile number"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">CONTINUE</button>
            <div className="formbottomdiv">
              <p>Or Login/Signup With</p>
              <FcGoogle size={18} className="googleicon" />
            </div>
          </form>
          <div className="termsandconditions">
            <p>
              By proceeding, you agree to MakeMyTrip's Privacy Policy, User
              Agreement and T&Cs
            </p>
          </div>
          <IoMdClose
            className="logincloseicon"
            size={22}
            onClick={handleCloseLogin}
          />
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
