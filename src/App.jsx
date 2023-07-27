import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Decorators from "./components/decorators/Decorators";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Venue from "./components/venue/Venue";
import Cater from "./components/cater/Cater";
import Photography from "./components/photograph/photography";

import Footer from "./components/footer/Footer";
import Promotion from "./components/promotion/Promotion";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Home />
        <Venue />
        <Decorators />
        <Photography/>
        <Cater/>
        <Promotion/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
