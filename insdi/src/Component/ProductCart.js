import React from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import { useState } from "react";
import { Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const text1 = `Why the longer lead time? `;
const text2 = `Why the longer lead time? `;
const items = [
  {
    key: "1",
    label: "Dispached in 5-6 days ",
    children: <p className="clr">{text1}</p>,
    expandIconPosition: "End",
    // showArrow: false,
  },
  {
    key: "2",
    label: "Home Delivery - $ 10",
    children: <p className="clr">{text2}</p>,
    // showArrow: false,
  },
];

const ProductCart = ({ CartDetails }) => {

  const [Prices, setPrices] = useState()

  let variantsize = CartDetails.heights;
  // debugger
  const [value, setValue] = useState(0);

  // let variantlength = variantsize.indexof(value)
  // console.log(variantlength)

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  console.log(value);

  const setChange = (key) => {
    console.log(key);
  };

  function price (){
    let getprice = null
    function ads (){ 
      debugger
      return  variantsize.indexOf(value)
    }
    if (variantsize[ ads() ]){
      getprice= CartDetails.price[ ads() ]
  }
  return setPrices(getprice)
  }
  // console.log(value);
  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        {/* <div className="padb text_h2">{CartDetails.price[0]}</div> */}
        {/* <div className="padb text_h2">{value}</div> */}
        <div className="padb text_h2">{Prices}</div>
        <div className="padb text_h2">
          <Radio.Group onChange={onChange} value={value}>
            {variantsize.map((e) => {
              return (
                <Radio className=" text_p" value={e} onClick={price}>
                  {e}
                </Radio>
              );
            })}
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
          <Collapse
            className="downslide"
            expandIconPosition="end"
            onChange={setChange}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
