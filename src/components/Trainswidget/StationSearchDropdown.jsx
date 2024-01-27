import React, { useState } from "react";
import TrainDropdown from "./TrainDropdown";
import "./trainswidget.css"
import OutsideClickHandler from "react-outside-click-handler";

const StationSearchDropdown = ({
  handleSearchData,
  field,
  trainData,
  setTrainData,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const updateSelectedTrain = (train) => {
    const key = field === "To" ? "destination" : "source";
    handleSearchData(key, train.JunctionName);
    setTrainData(train);
  };
  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown-train">
      <div className="tw-from" onClick={handleCityDropdown}>
        <p>{field}</p>
        <p className="train-selected-city">{trainData.JunctionName}</p>
      </div>

      {showDropdown && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowDropdown(false);
          }}
        >
          <div className="train-search-maindiv">
            <TrainDropdown
              setShowDropdown={setShowDropdown}
              updateSelectedTrain={updateSelectedTrain}
            />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default StationSearchDropdown;
