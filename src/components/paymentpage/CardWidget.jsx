import React, { useEffect, useState } from "react";
import "./cardwidget.css";
import Select from "react-select";
import ConfirmationPopup from "../confirmation/ConfirmationPopup";

const CardWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [cardNo, setCardNo] = useState("");
  const [isCardNoValid, setIsCardNoValid] = useState(true);
  const [cvv, setcvv] = useState("");
  const [isCvvValid, setIsCvvValid] = useState(true);
  const [cardName, setCardName] = useState("");
  const [cardPayBtnEnable, setCardPayBtnEnable] = useState(false);

  const handleEnableCardPayBtn = () => {
    if (
      cardNo &&
      cardNo.length === 16 &&
      isCardNoValid &&
      cardName &&
      cvv &&
      cvv.length === 3 &&
      isCvvValid &&
      selectedMonth &&
      selectedMonth.value &&
      selectedYear &&
      selectedYear.value
    ) {
      setCardPayBtnEnable(true);
    } else {
      setCardPayBtnEnable(false);
    }
  };

  const validateCvv = () => {
    if (cvv.length !== 2) {
      setIsCvvValid(false);
    } else {
      setIsCvvValid(true);
    }
  };

  useEffect(() => {
    handleEnableCardPayBtn();
  }, [cvv]);

  const validateCardNo = () => {
    if (cardNo.length !== 15) {
      setIsCardNoValid(false);
    } else {
      setIsCardNoValid(true);
    }
  };

  const monthOptions = [
    { value: "1", label: "January(01)" },
    { value: "2", label: "February(02)" },
    { value: "3", label: "March(03)" },
    { value: "4", label: "April(04)" },
    { value: "5", label: "May(05)" },
    { value: "6", label: "June(06)" },
    { value: "7", label: "July(07)" },
    { value: "8", label: "August(08)" },
    { value: "9", label: "September(09)" },
    { value: "10", label: "October(10)" },
    { value: "11", label: "November(11)" },
    { value: "12", label: "December(12)" },
  ];

  const styles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    indicatorSeparator: () => null,
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));

  const handleConfirmClick = () => {
    // setShowConfirmation(true);
    alert(
      "Sorry..ths service is not available at the moment.Try another payment method."
    );
  };

  return (
    <>
      <div className="cardwidget-container">
        <label className="labelforcardnumber">Card Number</label>
        <input
          type="text"
          placeholder="Enter Your Card Number Here"
          required
          onChange={(e) => {
            setCardNo(e.target.value);
            validateCardNo();
            handleEnableCardPayBtn();
          }}
        />
        {!isCardNoValid && (
          <p style={{ color: "red", fontSize: "12px", margin: "0 0 20px 0" }}>
            Card Numbere must have 16 digits
          </p>
        )}

        <label>Name on Card</label>
        <input
          onChange={(e) => {
            setCardName(e.target.value);
            handleEnableCardPayBtn();
          }}
          type="text"
          placeholder="Enter Your Name On Card"
          required
        />

        <div className="expiry-cvv-div">
          <div className="expirydate-div">
            <label>Expiry Month & Year</label>
            <div className="month-year-dropdown">
              <Select
                className="month-dropdown"
                options={monthOptions}
                value={selectedMonth}
                onChange={setSelectedMonth}
                styles={styles}
              />

              <Select
                className="year-dropdown"
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                styles={styles}
              />
            </div>
          </div>

          <div className="cvv-div">
            <label>Card CVV</label>
            <input
              placeholder="Enter Card CVV"
              required
              onChange={(e) => {
                setcvv(e.target.value);
                validateCvv();
                handleEnableCardPayBtn();
              }}
            />
            {!isCvvValid && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "0px 0px 10px 0px",
                }}
              >
                Cvv must have 3 digits
              </p>
            )}
          </div>
        </div>
        <button
          disabled={!cardPayBtnEnable}
          style={{ opacity: !cardPayBtnEnable ? 0.5 : 1 }}
          className="card-paynow-btn"
          onClick={handleConfirmClick}
        >
          PAY NOW
        </button>
        {showConfirmation && (
          <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
        )}

        <p className="card-termsandconditions">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default CardWidget;
