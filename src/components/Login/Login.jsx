import React from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="loginmaindiv">
        <div className="logintopdiv">
          <button>
            <p>PERSONAL ACCOUNT</p>
          </button>
        </div>
        <form>
          <label>Email or Mobile Number</label>
          <input placeholder="Enter email or mobile number" />
          <button>CONTINUE</button>
          <p>Or Login/Signup With</p>
          <FcGoogle size={18} className="googleicon"/>
        </form>
        <div className="termsandconditions">
          <p>
            By proceeding, you agree to MakeMyTrip's Privacy Policy, User
            Agreement and T&Cs
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
