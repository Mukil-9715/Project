import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Nav from "../Nav";

import Loginconform from "../Loginconfirm";
import Ordersummary from "../Ordersummary";
import Stepper from "../Stepper";

import { useNavigate } from "react-router-dom";
import Deliverydevisions from "../Deliverydevision";
import Logininfo from "../Logininfo";
import Payment from "../Payment";
import ScrollToTop from "../ScrollToTop";

const Buypage = () => {
  const navigation = useNavigate() 
  const [stepper, setstepper] = useState(false)
  const [loginfo, setloginfo] = useState(true)
  const [loginform, setloginform] = useState(false)
  const [Deliverydevision, setDeliverydevision] = useState(false)
  const [ordersummary, setordersummary] = useState(false)
  const [payment, setpayment] = useState(true)


  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])
  // setloginfo(true)
  return (
    <div className="buypage"> 
      <Nav />
      <ScrollToTop />
      <Stepper/>
      {loginfo&&(<Logininfo loginfo={setloginfo} setloginforms={setloginform} setDeliverydevisions={setDeliverydevision} />)} 
      {loginform&&(<Loginconform loginfo={setloginfo} setloginforms={setloginform} />)}
      {Deliverydevision&&(<Deliverydevisions setDeliverydevisions={setDeliverydevision} loginfo={setloginfo} setordersummary={setordersummary} />)}
      {ordersummary&&(<Ordersummary/>)}
      {payment&&(<Payment/>)}
      <Footer />
    </div>
  );
};

export default Buypage;
