import "./App.css";
import LoginPage from "./Component/Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Registerform from "./Component/Pages/Registerform";
import Home from "./Component/Pages/Home";
import { useEffect, useState } from "react";

function App() {
  let [Message, setMessage] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/CardDetails")
        .then((res) => res.json())
        .then((message) => {
          debugger;
          setMessage(message);
        });
    }
    getData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Registerform" element={<Registerform />} />
        <Route path="/Home" element={<Home Data={Message} />} />
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
