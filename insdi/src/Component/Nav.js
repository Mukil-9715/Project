import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./nav.css";
import { Input, Space } from "antd";
// import { Link } from "react-router-dom";
// import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const Nav = () => {
  // const {postResponse} = useContext(AllDataScaffoldContext)
  // const respond=postResponse 
  // debugger
  // console.log(respond)
  return (
    // <div className="ma">
    <div className="main_nav flex">
      <div className="flex">
        <div>
          <a href="">
            <img
              className="img1"
              src="https://www.shutterstock.com/image-vector/design-concept-construction-flat-style-600w-540677266.jpg"
              alt=""
              width="60px"
            ></img>
          </a>
        </div>
        <div className="padl text_h ">INSDI</div>
      </div>
      <div>
        <Space className="searchBox" direction="vertical">
          <Search
            placeholder="Search For products"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>

      <div className="text_h2 flex " style={{ width: "300px" }}>
        {/* <div>
          {/* <div>username</div> 
          <div>{respond[0].username}</div>
        </div>
        {/* <Link to="/cart" className="links">
          {" "}
          <ShoppingCartOutlined /> cart
        </Link> */}
      </div>
    </div>
    // </div>
  );
};

export default Nav;
