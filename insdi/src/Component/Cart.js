import React from "react";
import "./nav.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card,Button } from "antd";
import { useState } from "react";


const { Meta } = Card;

const Cart = ({ fromhomecart }) => {
  
  
  
  //   debugger;
  return Object.keys(fromhomecart).map((e) => {
    let valueofthekey = fromhomecart[e];


    return (
      <Card
        style={{
          width: 300,
          margin: 25,
        }}
        cover={<img alt="example" src={valueofthekey.image} />}
        >
        <Meta
          className="padb"
          title={valueofthekey.name}
          description={valueofthekey.description}
          />
        <div className="padb">
          <div className="">Cart value :  <span className="text_p">{valueofthekey.count}</span></div>
        </div>
        <div className="padb ">
          <div className="">Price :  <span className="text_h2">{valueofthekey.price[0]}</span></div>
          <div className="">Total Price :  <span className="text_h2">{Number}</span></div>
        </div>
        <div className="padb">
          <div className="">Availability : <span className="text_p">{valueofthekey.stock[0]}</span></div>
        </div>
        <div className="padb">
          <Button className="" type="primary" size="large">Buy</Button>
        </div>
      </Card>
    );
  });
};

export default Cart;
