import React from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import { useState } from "react";
import { Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

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
  const [Prices, setPrices] = useState();

  let variantsize = CartDetails.heights;
  // const [value, setValue] = useState();

  const Changeprice = (e) => {
    // debugger

    console.log(e.target.value);
    const value = e.target.value;
    console.log("radio checked", e.target.value);

    const indexno = variantsize.indexOf(value);
    if (variantsize[indexno]) {
      console.log("hi");
      setPrices(CartDetails.price[indexno]);
    }
    // console.log(getprice);
  };
  // console.log(value);

  const setChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        {/* <div className="padb text_h2">{CartDetails.price[0]}</div> */}
        {/* <div className="padb text_h2">{value}</div> */}
        <div className="padb text_h2">{Prices}</div>
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
            <Button size="large">
            <Link to="/buy">Buy Now</Link>
            </Button>
          </div>
          <div>
            <Button type="primary" size="large">
              <Link to="/Cart">Add cart</Link>
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
