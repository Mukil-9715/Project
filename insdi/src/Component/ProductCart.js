import React from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import { useState } from "react";
import { Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";


const ProductCart = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">Product Name</div>
        <div className="padb text_p">Description</div>
        <div className="padb text_h2">Prize</div>
        <div className="padb text_h2">
          <Radio.Group onChange={onChange} value={value}>
            <Radio className=" text_p" value={1}>
              A
            </Radio>
            <Radio className=" text_p" value={2}>
              B
            </Radio>
            <Radio className=" text_p" value={3}>
              C
            </Radio>
            <Radio className=" text_p" value={4}>
              D
            </Radio>
          </Radio.Group>
        </div>
        <div className="padb text_p">Available status</div>

        <div className="flex padb">
          <div>
            <Button size="100px">Buy Now</Button>
          </div>
          <div>
            <Button type="primary" size="500px">
              Add cart
            </Button>
          </div>
        </div>
        <div className="padb">
          <div className="">Dispached in 5-6 days <InfoCircleOutlined /></div>
          <div className="underline">Why the longer lead time? </div>
          <hr></hr>
        </div>

        <div className="padb">
          <div className="">Home Delivery - <important>$ 10</important> </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
