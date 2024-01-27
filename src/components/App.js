import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Main from "./HomePage/Main";
import { Stickyheader } from "./stickeyheader/Stickyheader";
import { useEffect, useState } from "react";
import MytripsPage from "./Profilepages/MytripsPage";
import HotelSearchPage from "./HotelSearchpage/HotelSearchPage";
import TrainsSearchPage from "./Trainssearchpage/TrainsSearchPage";
import FlightSearchPage from "./FlightSearch/FlightSearchPage";
import PaymentPageMain from "./paymentpage/PaymentPageMain";
import SingleHotelPage from "./HotelSearchpage/SingleHotelPage";
import { useAuthContext } from "../Context/AuthContext";
import BusesSearch from "./BusesSearch/BusesSearch";
import Userdetails from "./checkoutpages/Userdetails";
import DeadClickPage from "./DeadClickPage/DeadClickPage";
import Flightcheckoutpage from "./checkoutpages/Flightcheckoutpage";
import Traincheckoutpage from "./checkoutpages/Traincheckoutpage";
import Hotelcheckoutpage from "./checkoutpages/Hotelcheckoutpage";
import Buscheckoutpage from "./checkoutpages/Buscheckoutpage";
import ConfirmationPopup from "./confirmation/ConfirmationPopup";
import { LoginStateProvider } from "../Context/LoginContext";

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
      <LoginStateProvider>
        <div className="App">
          {showStickyHeader && <Stickyheader />}
          {/* <TopNavbar /> */}
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/mytrips" element={<MytripsPage />} />
            <Route path="/hotels" element={<HotelSearchPage />} />
            <Route path="/trains" element={<TrainsSearchPage />} />
            <Route path="/flights" element={<FlightSearchPage />} />
            <Route path="/payment/:id" element={<PaymentPageMain />} />
            <Route path="/singlehotel/:id" element={<SingleHotelPage />} />
            <Route path="/buses" element={<BusesSearch />}></Route>
            <Route path="/details" element={<Userdetails />}></Route>
            <Route path="/deadclick" element={<DeadClickPage />}></Route>
            <Route
              path="/flightcheckout/:id"
              element={<Flightcheckoutpage />}
            />
            <Route path="/traincheckout/:id" element={<Traincheckoutpage />} />
            <Route path="/hotelcheckout/:id" element={<Hotelcheckoutpage />} />
            <Route path="/buscheckout/:id" element={<Buscheckoutpage />} />
            <Route path="/confirm" element={<ConfirmationPopup />} />
          </Routes>
        </div>
      </LoginStateProvider>
    </>
  );
}

export default App;
