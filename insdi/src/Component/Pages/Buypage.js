import React, { useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";

import Stepper from "../Stepper";
import Loginconfirm from "../Loginconfirm";
import Deliveryform from "../Deliveryform";
import Ordersummary from "../Ordersummary";
import Payment from "../Payment";
import DOrdersummary from "../DOrdersummary";
import { useNavigate } from "react-router-dom";

const Buypage = () => {
  const navigation = useNavigate() 
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])
  return (
    <div>
      <Nav />
      <Stepper/>
      <Loginconfirm/>
      <Deliveryform/>
      <Ordersummary/>
      {/* <DOrdersummary/> */}
      <Payment/>
      <Footer />
    </div>
  );
};

export default Buypage;
