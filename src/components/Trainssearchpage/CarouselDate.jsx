import React, { useState } from "react";
import "./carouseldate.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CarouselDate = () => {
  const generateDates = (startDate = new Date(), count = 9) => {
    const generatedDates = [];
    for (let i = 0; i < count; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      generatedDates.push(newDate);
    }
    return generatedDates;
  };

  const [dates, setDates] = useState(generateDates(new Date(), 9));

  const showNextDates = () => {
    const lastDate = dates[dates.length - 1];
    lastDate.setDate(lastDate.getDate() + 1);
    console.log(lastDate);
    const newDates = generateDates(new Date(lastDate), 9);
    setDates(newDates);
  };

  const showPreviousDates = () => {
    const firstDate = dates[0];
    const startDate = new Date(firstDate);
    startDate.setDate(startDate.getDate() - 9);
    const newDates = generateDates(startDate, 9);
    setDates(newDates);
  };

  return (
    <div className="carousel-maindiv">
      <div className="carousel-innerdiv">
        <button
          className="showprevious-btn"
          onClick={showPreviousDates}
          disabled={dates[0].toDateString() === new Date().toDateString()}
        >
          <IoIosArrowBack />
        </button>
        <div className="carousel-dates">
          {dates.map((date, index) => (
            <div className="individual-date-div" key={index}>
              {date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </div>
          ))}
        </div>
        <button onClick={showNextDates} className="shownext-btn">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default CarouselDate;
