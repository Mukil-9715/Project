import React, { useContext } from "react";
import { Card } from "antd";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";


const { Meta } = Card;
const Cards = ( ) => {
  let{scaffold,cartitems, setcartitems }= useContext (AllDataScaffoldContext)
  let   changethestateofcartsitems = setcartitems
   let  currentthestateofcartsitems =  cartitems
  let scafoldData=scaffold
  // debugger;
  const navigate = useNavigate()
  function getCartDetails(SeperateCardData){

    let cartobject = JSON.parse(JSON.stringify(currentthestateofcartsitems));
      cartobject[SeperateCardData.name] =
           { ...SeperateCardData}
           
    // obj.push(cartobject);
    console.log(cartobject);
    changethestateofcartsitems(cartobject);



    console.log(SeperateCardData)
    navigate('/CardDetails' )
  }
  return (
    <div className="card">
      {scafoldData.map((e) => {
        return (
          <div>
            {/* // <div> */}
            <Card
            onClick={()=>(getCartDetails(e))}
              className="cad"
              hoverable
              style={{
                width: 240,
                height: 350,
                marginInline: "auto",
                objectFit: "contain",
              }}
            
            cover={<img  className="img" alt="example" src={e.image} />}
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
