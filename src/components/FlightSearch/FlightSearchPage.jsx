import React, { useEffect, useState } from "react";
import "./flightsearchpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Slider } from "@mui/material";
import { Container } from "@mui/material";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Flightdetails from "./Flightdetails";
import Flighttopsection from "./Flighttopsection";
import useFetch from "../../Hooks/useFetch";
import Flightcard from "./Flightcard";

const FlightSearchPage = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const stops = params.get("stops");
  const sort = params.get("sort");
  const departureTime = params.get("departureTime");
  const { get, data } = useFetch([]);
  // const [stops, setSelectedOption] = useState(null);

  const handleCheckboxChange = (key, value) => {
    // setSelectedOption(value === selectedOption ? null : value);
    if (value === "") {
      params.delete(key);
      setParams(params);
      return;
    }

    const newSearchParams = { ...Object.fromEntries(params), [key]: value };
    setParams(newSearchParams);
  };

  useEffect(() => {
    get(
      `/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}${
        stops ? `&filter={"stops":"${stops}"}` : ""
      }${sort ? `&sort={"ticketPrice":${sort}}` : ""}${
        departureTime
          ? `&filter={"departureTime":{"$eq":"17:00","$lte":"15:00","$gte":"06:00"}}`
          : ""
      }`
    );
  }, [params]);

  const handleSearchButtonClick = (searchData) => {
    // Update the search parameters using the searchData from Flighttopsection
    setParams({
      source: searchData.source,
      destination: searchData.destination,
      day: searchData.day,
      date: searchData.date, // Assuming date is part of searchData
    });
  };

  return (
    <>
      <Stickyheader />
      <div className="flightsearch">
        <Flighttopsection updateSearchParams={handleSearchButtonClick} />

        <div className="partitiondiv"></div>

        <div className="flightsearch-btmdiv">
          <div className="flightsearch-btmleftdiv">
            <div className="popularfilters-div">
              <p className="popularfilters-head">Popular Filters</p>
              <ul>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="option1"
                    />
                    <p>Non Stop</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="option2"
                    />
                    <div className="airline-image-indigo"></div>
                    <p>IndiGo</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input className="filter-checkbox" type="checkbox" />
                    <div className="airline-image-vistara"></div>
                    <p>Vistara</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input className="filter-checkbox" type="checkbox" />
                    <div className="airline-image-airindia"></div>
                    <p>Air India</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="popularfilters-div">
              <p className="popularfilters-head">Stops</p>
              <ul>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      // value="0"
                      checked={stops === "0" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange("stops", e.target.checked ? 0 : "")
                      }
                    />
                    <p>Non Stop</p>
                  </div>
                  <p className="rate"></p>
                </li>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      // value="1"
                      checked={stops === "1" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange("stops", e.target.checked ? 1 : "")
                      }
                    />
                    <p>Stop 1</p>
                  </div>
                  <p className="rate"></p>
                </li>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      // value="2"
                      checked={stops === "2" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange("stops", e.target.checked ? 2 : "")
                      }
                    />
                    <p>Stop 2</p>
                  </div>
                  <p className="rate"></p>
                </li>
              </ul>
            </div>
            <div className="popularfilters-div">
              <p className="popularfilters-head">Sort By Price</p>
              <ul>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      checked={sort === "1" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange("sort", e.target.checked ? 1 : "")
                      }
                    />
                    <p>Low to High</p>
                  </div>
                  <p className="rate"></p>
                </li>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      checked={sort === "-1" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange("sort", e.target.checked ? -1 : "")
                      }
                    />
                    <p>High to Low</p>
                  </div>
                  <p className="rate"></p>
                </li>
              </ul>
            </div>
            <div className="popularfilters-div">
              <p className="popularfilters-head">Departure from Jaipur</p>
              <ul>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      checked={departureTime === "15" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "departureTime",
                          e.target.checked ? 15 : ""
                        )
                      }
                    />
                    <p>Before 3 PM</p>
                  </div>
                  <p className="rate"></p>
                </li>
                <li>
                  <div>
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      checked={departureTime === "6" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "departureTime",
                          e.target.checked ? 6 : ""
                        )
                      }
                    />
                    <p>After 6 AM</p>
                  </div>
                  <p className="rate"></p>
                </li>
              </ul>
            </div>

            <div className="airlines-filter-maindiv">
              <p className="airlinesfilter-head">Airlines</p>
              <ul>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="airindia-logo"></div>
                    <p>Air India</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="airindiaexpress-logo"></div>
                    <p>Air India Express</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="akasaair-logo"></div>
                    <p>Akasa Air</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="indigo-logo"></div>
                    <p>IndiGo</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="spicejet-logo"></div>
                    <p>SpiceJet</p>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" className="airline-checkbox" />
                    <div className="vistara-logo"></div>
                    <p>Vistara</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Flightcard data={data} />
        </div>
      </div>
    </>
  );
};

export default FlightSearchPage;
