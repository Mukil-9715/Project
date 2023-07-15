import React from "react";
import Carousel from "../Carousel";
import Nav from "../Nav";
import Cards from "../Cards";
import Footer from "../Footer"; 
import "../../App.css";
import { Routes, Route } from "react-router-dom";
import Productspage from "./ProductsPage"

const Home = ({Data}) => {

    return (
    <div>
      <Routes>
      <Route path='/CardDetails' element={<Productspage/>}/>
      </Routes>
      <Nav />
      <Carousel />
       <Cards scafoldData = {Data}/>
      <Footer />
    </div>
  );
};

export default Home;

