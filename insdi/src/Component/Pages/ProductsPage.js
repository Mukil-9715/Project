import React from "react";
import "./LoginPage.css";
import ProductCart from "../ProductCart";
import Nav from "../Nav";
import Footer from "../Footer";
// import InfoCircleOutlined from


const ProductsPage = () => {
  return (
    <div>
      <Nav />
      <div className="productdisplay">
        <div className="d flex0">
          <img
            className="proimg"
            src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
            alt="car"
            width=" 80%"
          />
        </div>
        <div className="d flexr">
          <ProductCart />
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
