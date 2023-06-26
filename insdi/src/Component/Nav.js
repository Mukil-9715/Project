import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./nav.css";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const Nav = () => {
  return (
    <div className="main_nav flex">
      <div className="flex">
        <div>
          <a href="">
            <img
              className="img"
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
      <div className="text_h2" >
        <ShoppingCartOutlined /> cart
      </div>
    </div>
  );
};

export default Nav;
