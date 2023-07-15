import React from "react";
import Carousel from "../Carousel";
import Nav from "../Nav";
import Cards from "../Cards";
import Footer from "../Footer";
import "../../App.css";
const Home = ({Data}) => {
    return (
    <div>
      <Nav />
      <Carousel />
       <Cards scafoldData = {Data}/>
      <Footer />
    </div>
  );
};

export default Home;

