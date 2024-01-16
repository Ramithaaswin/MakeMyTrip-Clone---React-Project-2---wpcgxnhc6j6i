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
import PaymentPageMain from "./paymentpage/PaymentPageMain";
import SingleHotelPage from "./HotelSearchpage/SingleHotelPage";
import AuthContextProvider, { useAuthContext } from "../Context/AuthContext";
import TopNavbar from "./HomePage/TopNavbar";
import BusesSearch from "./BusesSearch/BusesSearch";
import Userdetails from "./checkoutpages/Userdetails";
import DeadClickPage from "./DeadClickPage/DeadClickPage";
import Flightcheckoutpage from "./checkoutpages/Flightcheckoutpage";
import Traincheckoutpage from "./checkoutpages/Traincheckoutpage";
import Hotelcheckoutpage from "./checkoutpages/Hotelcheckoutpage";
import Buscheckoutpage from "./checkoutpages/Buscheckoutpage";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { authenticated, isUserLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!authenticated) isUserLoggedIn();
  }, [authenticated]);

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
        {/* <TopNavbar /> */}
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/mytrips" element={<MytripsPage />} />
          <Route path="/myprofile" element={<ProfileDetails />} />
          <Route path="/hotels" element={<HotelSearchPage />} />
          <Route path="/trains" element={<TrainsSearchPage />} />
          <Route path="/flights" element={<FlightSearchPage />} />
          <Route path="/payment" element={<PaymentPageMain />} />
          <Route path="/singlehotel" element={<SingleHotelPage />} />
          <Route path="/buses" element={<BusesSearch />}></Route>
          <Route path="/details" element={<Userdetails />}></Route>
          <Route path="/deadclick" element={<DeadClickPage />}></Route>
          <Route path="/flightcheckout" element={<Flightcheckoutpage />} />
          <Route path="/traincheckout" element={<Traincheckoutpage />} />
          <Route path="/hotelcheckout" element={<Hotelcheckoutpage />} />
          <Route path="/buscheckout" element={<Buscheckoutpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
