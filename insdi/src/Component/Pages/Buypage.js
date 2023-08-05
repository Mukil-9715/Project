import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

import Stepper from "../Stepper";
import Loginconfirm from "../Loginconfirm";
import Deliveryform from "../Deliveryform";
import Ordersummary from "../Ordersummary";
import Payment from "../Payment";
import DOrdersummary from "../DOrdersummary";

const Buypage = () => {
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
