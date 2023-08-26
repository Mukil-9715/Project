import React, { useContext, useState } from "react";
import { Card } from "antd";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const { Meta } = Card;
const Cards = () => {
  const navigate = useNavigate();
  let { scaffold, searchvalue, setcartitems } = useContext(
    AllDataScaffoldContext
  );
  
  const scaffoldData = scaffold;
  // const [filtredData, setfiltredData] = useState([]);
  // console.log(filtredData);
  console.log(searchvalue);
  let changethestateofcartsitems = setcartitems;
  const filtered = [];

  function handleCardsSearch() {
    // debugger;
    scaffoldData.filter((data) => {
      console.log(scaffoldData);
      const checkSearch = searchvalue.toString().toLowerCase()
      if (data.name.toLowerCase().includes(checkSearch)) {
        debugger
        filtered.push(data);
        // setfiltredData(filtered);
      }
    });
    console.log(filtered);
  }

  handleCardsSearch();

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
      {
        filtered != 0
          ? filtered.map((e) => {
              return (
                <div>
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
                    <div>
                      <Meta className="text_p" title={e.name} />
                    </div>
                  </Card>
                </div>
              );
            })
          : 
        scaffoldData.map((e) => {
            return (
              <div>
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
        style={{ height : 250 }}
        />
                  }
                >
                  <div>
                    <Meta className="text_p" title={e.name} />
                  </div>
                </Card>
              </div>
            );
        })
      }
    </div>
  );
};

export default Cards;
