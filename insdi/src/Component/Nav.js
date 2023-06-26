import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./nav.css";

const Nav = () => {
  return (
    <div className="main flex">
      <div className="flex">
      <div>
        <a href="">
          <img  className="img" src="https://www.shutterstock.com/image-vector/design-concept-construction-flat-style-600w-540677266.jpg" alt="" width="60px" ></img>
        </a>
      </div>
      <div className="padl">
        INSDI
      </div>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="search"
            class="text-input search react-search-input-normal js-reload-value"
            placeholder="Search for products"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          />
        </form>
      </div>
      <div>
        
        <ShoppingCartOutlined /> cart
      </div>
    </div>
  );
};

export default Nav;
