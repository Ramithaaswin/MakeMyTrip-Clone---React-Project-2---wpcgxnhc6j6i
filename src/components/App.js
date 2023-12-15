import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Main from "./HomePage/Main";
import { Stickyheader } from "./stickeyheader/Stickyheader";
import { useEffect, useState } from "react";
import MytripsPage from "./Profilepages/MytripsPage";
import ProfileDetails from "./Profilepages/ProfileDetails";
import HotelSearchPage from "./HotelSearchpage/HotelSearchPage";
import TrainsSearchPage from "./Trainssearchpage/TrainsSearchPage";
import FlightSearchPage from "./FlightSearch/FlightSearchPage";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 90) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="App">
        {showStickyHeader && <Stickyheader />}
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/mytrips" element={<MytripsPage />} />
            <Route path="/myprofile" element={<ProfileDetails />} />
            <Route path="/hotels" element={<HotelSearchPage />} />
            <Route path="/trains" element={<TrainsSearchPage />} />
            <Route path="/flights" element={<FlightSearchPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
