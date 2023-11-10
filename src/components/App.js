import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Main from "./HomePage/Main";
import MediaCopyRight from "./Footer/MediaCopyRight";
import MainFooter from "./Footer/MainFooter";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Login />
      <MainFooter />
    </div>
  );
}

export default App;
