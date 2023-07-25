import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Registerform from "./Component/Pages/Registerform";
import LoginPage from "./Component/Pages/LoginPage";
import LogPage from "./Component/Pages/Logpag";
import Home from "./Component/Pages/Home";
import Productspage from "./Component/Pages/ProductsPage";
import AllDataScaffoldContext from "./Component/ScaffoldContext/DataContext";
import Cart from "./Component/Cart";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
//implenting lazy loader

// const Registerform = React.lazy(()=> import ("./Component/Pages/Registerform"))
// const LoginPage = React.lazy(()=> import ("./Component/Pages/LoginPage"))
// const Home = React.lazy(()=> import ("./Component/Pages/Home"))

function App() {
  let { setScaffold } = useContext(AllDataScaffoldContext);

  

  return (
    <div>
      {/* <React.Suspense fallback ={<span>Loading .... </span>}> */}
      <Routes>
        {/* <Route path="/" element={<LogPage respond={postResponse}  />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/Registerform" element={<Registerform />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/CardDetails" element={<Productspage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
