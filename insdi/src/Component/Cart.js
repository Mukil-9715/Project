import React, { useState } from "react";
import "./nav.css";
import { Card, Button } from "antd";
import Nav from "./Nav";
import Footer from "./Footer";


const { Meta } = Card;

const Cart = () => {
  // //   debugger;
  // return Object.keys(fromhomecart).map((e) => {
  //   let valueofthekey = fromhomecart[e];

  return (
    <div>
      <Nav />

      <div className="cart">
        <Card
          style={{
            width: 300,
            margin: 25,
          }}
          cover={<img alt="example" src="image" />}
        >
          <Meta className="padb" title="name" description="description" />
          <div className="padb">
            <div className="">
              Cart value : <span className="text_p">count</span>
            </div>
          </div>
          <div className="padb ">
            <div className="">
              Price : <span className="text_h2">price</span>
            </div>
            <div className="">
              Total Price : <span className="text_h2">Number</span>
            </div>
          </div>
          <div className="padb">
            <div className="">
              Availability : <span className="text_p">stock</span>
            </div>
          </div>
          <div className="padb">
            <Button className="" type="primary" size="large">
              Buy
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
