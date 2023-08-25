import { Button } from "antd";
import React, { useContext, useState } from "react";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const Ordersummary = () => {
  let { cartitems, Prices } = useContext(AllDataScaffoldContext);
  let fromhomecart = cartitems;
  let prices = Prices;
  const [count, setcount] = useState(0);
  const [Tlpri, setTlpri] = useState(0);
  const Tlprices = () => {
    const noprice = +prices.replace("$", "").replace(",", "");
    debugger;
    return setTlpri(noprice * count);
  };
  // debugger

  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">
        <div className="  flex">
          <div className="width8 flex">
            <div>
              <img
                className="img"
                src={fromhomecart.image}
                alt={fromhomecart.name}
                width="200px"
              />
            </div>
            <div>
              <div>{fromhomecart.name}</div>
              <div>{Tlpri}</div>
              <div>
                <Button
                  onClick={() => {
                    setcount(count - 1);
                    Tlprices();
                  }}
                >
                  -
                </Button>
                <span style={{ padding: 20 }}>{count}</span>
                <Button
                  onClick={() => {
                    setcount(count + 1);
                    Tlprices();
                  }}
                >
                  +
                </Button>
              </div>
              {/* <div><input type="button" onClick={()=>{setcount(count+1)}}>+</input><span>{count}</span><input type="button" onClick={()=>{setcount(count-1)}}>+</input></div> */}
            </div>
          </div>
          <div>delivery </div>
        </div>

        <div>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;