import React, { useContext, useState } from "react";
import Carousel from "../Carousel";
import Nav from "../Nav";
import Cards from "../Cards";
import Footer from "../Footer";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
