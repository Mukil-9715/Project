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

// https://images.pexels.com/photos/10401534/pexels-photo-10401534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
