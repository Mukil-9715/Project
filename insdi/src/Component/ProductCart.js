import React from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import { useState } from "react";
import { Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse } from 'antd';



const text1 = `Why the longer lead time? `;
const text2= `Why the longer lead time? `;
const items = [
  {
    key: '1',
    label: 'Dispached in 5-6 days ',
    children: <p>{text1}</p>,
    expandIconPosition: 'End',
    // showArrow: false,

  },
  {
    key: '2',
    label: 'Home Delivery - $ 10',
    children: <p>{text2}</p>,
    // showArrow: false,
  },
];





const ProductCart = ({CartDetails}) => {
  debugger
console.log(CartDetails);
    const setChange = (key) => {
       console.log(key);
     };
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };

    return (
      <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        <div className="padb text_h2">{CartDetails.price[0]}</div>
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

        <div className="flex padb halwidth">
          <div>
            <Button size="large">Buy Now</Button>
          </div>
          <div>
            <Button type="primary" size="large">
              Add cart
            </Button>
          </div>
        </div>
        <div>
        <Collapse className="downslide" expandIconPosition = "end"  onChange={setChange} items={items} />

        </div>


      </div>
    </div>
  );
};

export default ProductCart;
