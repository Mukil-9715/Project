import React from 'react';
// import './nav.css';
import { Carousel } from 'antd';
const contentStyle = {
  margin:0,
  height: '70vh',
  color: '#fff',
  lineHeight: '70vh',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='imgcar ' src='https://i.pinimg.com/474x/70/5e/ef/705eefcdf058d2b1429b190df774acae.jpg'alt='' width="100%" height="100%" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Carousels;