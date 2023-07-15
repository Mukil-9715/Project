import React from 'react'
import "./LoginPage.css";
import ProductCart from "../ProductCart";


const Products = () => {
  return (
    <div className='productdisplay'>
        <div className='d flex0'>
          <img className='proimg' src='https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg' alt='car' width=" 80%" />
          </div>
        <div className='d flexr'><ProductCart/></div>

    </div>

  )
}

export default Products