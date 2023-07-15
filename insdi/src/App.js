import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState  } from "react";

import Registerform from "./Component/Pages/Registerform";
import LoginPage from "./Component/Pages/LoginPage";
import Home from "./Component/Pages/Home";
import ProductCart from "./Component/ProductCart";
import Product from "./Component/Pages/ProductsPage";

//implenting lazy loader

// const Registerform = React.lazy(()=> import ("./Component/Pages/Registerform")) 
// const LoginPage = React.lazy(()=> import ("./Component/Pages/LoginPage")) 
// const Home = React.lazy(()=> import ("./Component/Pages/Home")) 

function App() {
  let [Message, setMessage] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/CardDetails")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setMessage(message);
        });
    }
    getData();
  }, []);

  return (
    <div>
      {/* <React.Suspense fallback ={<span>Loading .... </span>}> */}


      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Registerform" element={<Registerform />} />
        <Route path="/Home" element={<Home Data={Message} />} />
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/products' element={<ProductCart/>}/> */}
        <Route path='/products' element={<Product/>}/>
      </Routes>
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
