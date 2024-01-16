import React from "react";
import "./userdetails.css";

const Userdetails = () => {
  return (
    <>
      <div className="userdetails-form-main-container">
        <h2 className="userdetails-header">User Details</h2>
        <div className="caution-text">
          <span>Important</span>: Enter name as mentioned on your passport or
          Government approved IDs.
        </div>

        <div className="userdetails-maindiv">
          <div className="udmd-topdiv">
            <input placeholder="First & Middle Name" className="name-input" />
            <input placeholder="Last Name" className="name-input" />
            <div className="udmd-malefemale-divs">
              <div>MALE</div>
              <div>FEMALE</div>
            </div>
          </div>
          <div className="udmd-bottomdiv">
            <div className="mobnumber-maindiv">
              <p className="udmd-label">Mobile No</p>
              <input placeholder="Mobile No(Optional)" className="name-input" />
            </div>
            <div className="email-maindiv">
              <p className="udmd-label">Email</p>
              <input placeholder="Email(Optional)" className="name-input" />
            </div>
          </div>
        </div>

        <div className="pincode-state-main-div">
          <h2 className="psmd-header">
            Your pincode and state
            <span>
              (Required for generating your invoice.You can edit this anytime
              later in your profile section. )
            </span>
          </h2>

          <div className="psinput-field-div">
            <div className="pincode-input-div">
              <p>Pincode</p>
              <input />
            </div>
            <div className="pincode-input-div">
              <p>State</p>
              <input />
            </div>
            <div className="pincode-input-div">
              <p>Address</p>
              <input />
            </div>
          </div>
        </div>
        <button className="ud-continue-btn">PAY NOW</button>
      </div>
    </>
  );
};

export default Userdetails;
