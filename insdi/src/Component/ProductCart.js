import React, { useContext, useState } from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
import { Button, Radio, message } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Link, useNavigate } from "react-router-dom";

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
  const  navigates = useNavigate()
  let { Prices, setPrices } = useContext(AllDataScaffoldContext);
  let prices = Prices;
  let setprices = setPrices;

  let variantsize = CartDetails.heights;
  const [values, setValues] = useState("");

  const Changeprice = (e) => {
    // debugger
    const value = e.target.value;
    const indexno = variantsize.indexOf(value);
    if (variantsize[indexno]) {
      console.log("hi");
      setprices(CartDetails.price[indexno]);
    }
    setValues(value)
    
  };

  const setChange = (key) => {
    console.log(key);
  };
  function handlecart (){
    values ? navigates("/cart") : message.warning("Select Varient")
    
  }
  function handlebuy (){
    values ? navigates("/buy") : message.warning("Select Varient")
    
    
  }
  
  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        {/* <div className="padb text_h2">{CartDetails.price[0]}</div> */}
        {/* <div className="padb text_h2">{value}</div> */}
        <div className="padb text_h2">{prices}</div>
        <div className="padb text_h2">
          <Radio.Group>
            {variantsize.map((e) => {
              return (
                <Radio className=" text_p" value={e} onChange={Changeprice}>
                  {e}
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <div className="padb text_p">Available status</div>

        <div className="flex padb halwidth">
          <div>
            <Button onClick={handlebuy} size="large">
              Buy Now
            </Button>
          </div>
          <div>
            <Button type="primary" size="large" onClick={handlecart}>
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
