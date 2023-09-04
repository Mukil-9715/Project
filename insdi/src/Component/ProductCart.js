import React, { useContext, useState } from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
import { Button, Radio, message } from "antd";
import { InfoCircleOutlined, InfoCircleFilled } from "@ant-design/icons";
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
  const navigates = useNavigate();
  let {
    Prices,
    setPrices,
    changethestateofcartsitems,
    currentthestateofcartsitems,
  } = useContext(AllDataScaffoldContext);
  let prices = Prices;
  let setprices = setPrices;
  let SeperateCardData = CartDetails;
  const [count, setcount] = useState(1);

  console.log(SeperateCardData);
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
    setValues(value);
  };

  const setChange = (key) => {
    console.log(key);
  };
  function handlecart() {
    values ? navigates("/cart") : message.warning("Select Varient");
  }
  function handlebuy() {
    values ? navigates("/buy") : message.warning("Select Varient");
  }

  function calculatediscountedCost() {
    const numericPrice = parseFloat(prices.replace("$", "").replace(",", ""));

    if (!isNaN(numericPrice)) {
      const totalCost = count * numericPrice;
      // Format the totalCost as a string with a dollar sign
      return `$${totalCost.toFixed(2)}`;
    } else {
      console.error("Invalid price format:", prices);
      return "Invalid Price";
    }
  }

  function calculateCost() {
    const numericPrice = parseFloat(prices.replace("$", "").replace(",", ""));

    if (!isNaN(numericPrice)) {
      const totalCost = count * numericPrice * 1.2;
      // Format the totalCost as a string with a dollar sign
      return `$${totalCost.toFixed(2)}`;
    } else {
      console.error("Invalid price format:", prices);
      return "Invalid Price";
    }
  }

  let DiscounterdCost;
  let Cost;
  function handleCount(Plusorminus) {
    Plusorminus === "plus"
      ? setcount(count + 1)
      : !count < 1 && setcount(count - 1);
    // Cost = calculateCost()
    // debugger
    console.log(Cost);
  }

  // let selectedDetails=[] 
  // function handleAddcart(){}

  // let obj=[]
  //  function calculatevalue  (SeperateCardData, plusorminus) {
  //   let cartobject = currentthestateofcartsitems;

  //   if (cartobject[SeperateCardData.name]) {
  //     cartobject[SeperateCardData.name] =
  //       plusorminus == "plus"
  //         ? {
  //             count: cartobject[SeperateCardData.name]["count"] + 1,
  //             ...SeperateCardData,
  //           }
  //         : {
  //             count: cartobject[SeperateCardData.name]["count"] - 1,
  //             ...SeperateCardData,
  //           };
  //   } else {
  //     cartobject[SeperateCardData.name] =
  //       plusorminus == "plus"
  //         ? { count: 1, ...SeperateCardData }
  //         : { count: 0, ...SeperateCardData };
  //   }
  //   obj.push(cartobject);
  //   console.log(cartobject);
  //   changethestateofcartsitems(cartobject)
  // };
  // let textcount = document.getElementById("count").value
  // function handletextCount(){
    // setcount(textcount)


  // }

  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        {/* <div className="padb text_h2">{CartDetails.price[0]}</div> */}
        {/* <div className="padb text_h2">{value}</div> */}
        {/* <div className="padb text_h2">{prices}</div> */}
        <div className="flex" style={{width:"300px"}}>
        <div className="padb text_h2">
          {(DiscounterdCost = calculatediscountedCost())}{" "}
        </div>
        <div className="padb text_h1" style={{color:"grey"}}>
          <del>{(Cost = calculateCost())} </del>
        </div>
        <div className="padb text_h1"  style={{color:"green"}}>20% Off <InfoCircleFilled /></div>
        </div >
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
        <div style={{ width: 150 }} className="flex">
          <Button
            type="primary"
            onClick={() => {
              handleCount("minus");
            }}
          >
            -
          </Button>
          <h2>{count}</h2>
          {/* <div><input type="text" onChange={()=>{handletextCount()}} defaultValue="0" id="count" /></div> */}
          <Button
            type="primary"
            onClick={() => {
              handleCount("plus");
            }}
          >
            +
          </Button>
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
