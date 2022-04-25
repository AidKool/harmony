import * as React from 'react';

const Cross = (props) => (
  <svg
  className='cross'
    x="0px"
    y="0px" 
    viewBox="0 0 95.6 95.6"
    style={{
      enableBackground: 'new 0 0 95.6 95.6',
    }}
    xmlSpace="preserve"
    {...props}>
    <style type="text/css">
      {'\n\t.st0{fill:none;stroke:#ffffff;stroke-width:10.9627;stroke-linecap:round;stroke-miterlimit:10;}\n'}
    </style>
    <defs />
    <g>
      <line className="st0" x1={90.1} y1={7.3} x2={7.3} y2={90.1} />
      <line className="st0" x1={5.5} y1={5.5} x2={71.4} y2={71.4} />
      <line className="st0" x1={82.6} y1={82.7} x2={90} y2={90.1} />
    </g>
  </svg>
);

export default Cross;
