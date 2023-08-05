import React, { useContext, useState } from "react";
import { Card } from "antd";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const { Meta } = Card;
const Cards = () => {
  let { scaffold, searchvalue, setcartitems } = useContext(
    AllDataScaffoldContext
  );
  // debugger
  let scaffoldData = scaffold;
  let changethestateofcartsitems = setcartitems;
  const [searchdata, setsearchdata] = useState([]);
  //  let  currentthestateofcartsitems =  cartitems
  // let scafoldData=scaffold
  // debugger;
  const navigate = useNavigate();

  // function hi() {
  // let searchdatafilter = scaffold.filter((e) => {
  // return e.name == searchvalue;
  // })
  // setsearchdata(searchdatafilter);
  // }
  // hi();
  // debugger
  function getCartDetails(SeperateCardData) {
    // let cartobject = JSON.parse(JSON.stringify(currentthestateofcartsitems));
    //   cartobject[SeperateCardData.name] =
    //        { ...SeperateCardData}

    // obj.push(cartobject);
    // console.log(cartobject);
    changethestateofcartsitems(SeperateCardData);

    console.log(SeperateCardData);
    navigate("/CardDetails");
  }
  return (
    <div className="card">
      {scaffold.name == searchvalue
        ? searchdata
        : scaffoldData.map((e) => {
            return (
              <div>
                {/* // <div> */}
                <Card
                  onClick={() => getCartDetails(e)}
                  className="cad"
                  hoverable
                  style={{
                    width: 240,
                    height: 350,
                    marginInline: "auto",
                    marginBlock: "auto",
                    objectFit: "contain",
                  }}
                  cover={
                    <img
                      className="img"
                      alt={e.name}
                      src={e.image}
                      style={{ height: 250 }}
                    />
                  }
                >
                  {/* </div> */}
                  <div>
                    <Meta className="text_p" title={e.name} />
                  </div>
                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default Cards;
