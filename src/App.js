import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";
import "../src/Layout/layout.css";
import "../src/Layout/media.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-multi-carousel/lib/styles.css";
import { Link, Route, Routes } from "react-router-dom";
import MainFile from "./Layout/MainFile.jsx";
import MainAbout from "./Layout/About-Us/MainAbout.jsx";
import MainProduct from "./Layout/Products/MainProduct.jsx";
import MainSingle from "./Layout/Single-Product/MainSingle.jsx";
import MainContact from "./Layout/Contact-Us/MainContact.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<MainAbout />} />
        <Route path="/product" element={<MainProduct />} />
        <Route path="/single-product" element={<MainSingle />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/" element={<MainFile />} />
      </Routes>
    </div>
  );
}

export default App;
