import React from "react";
import Header from "./Components/Header.jsx";
import Banner from "./Home/Banner.jsx";
import Mens from "./Home/Mens.jsx";
import Womens from "./Home/Womens.jsx";
import Kids from "./Home/Kids.jsx";
import Explore from "./Home/Explore.jsx";
import Media from "./Home/Media.jsx";
import Details from "./Components/Details.jsx";
import Footer from "./Components/Footer.jsx";

function MainFile() {
  return (
    <>
      <Header />
      <Banner />
      <Mens />
      <Womens />
      <Kids />
      <Explore />
      <Media />
      <Details />
      <Footer />
    </>
  );
}

export default MainFile;
