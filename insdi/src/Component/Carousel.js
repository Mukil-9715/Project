import React from 'react';
// import './index.css';
import { Carousel } from 'antd';
const contentStyle = {
  height: '70vh',
  color: '#fff',
  lineHeight: '70vh',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
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