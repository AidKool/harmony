import * as React from 'react';

const Burger = (props) => (
  <svg
    className="burger-icon"
    x="0px"
    y="0px"
    viewBox="0 0 97.1 74.9"
    style={{
      enableBackground: 'new 0 0 97.1 74.9',
    }}
    xmlSpace="preserve"
    {...props}>
    <style type="text/css">
      {'\n\t.st0{stroke-width:8.316;stroke-linecap:round;stroke-miterlimit:10;}\n'}
    </style>
    <defs />
    <g>
      <line className="st0 line-one" x1={4.2} y1={4.2} x2={93} y2={4.2} />
      <line className="st0 line-three" x1={4.2} y1={37.5} x2={93} y2={37.5} />
      <line className="st0 line-three" x1={4.2} y1={70.8} x2={65.1} y2={70.8} />
      <line className="st0 line-two" x1={80.3} y1={70.8} x2={93} y2={70.8} />
    </g>
  </svg>
);


export default Burger;
