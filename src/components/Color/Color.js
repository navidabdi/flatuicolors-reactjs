import React from 'react';
import './Color.css';
const Color = ({ color }) => {
  return (
    <div className="color" style={{ backgroundColor: color.hex }}>
      <p className="color__name">{color.name}</p>
    </div>
  );
};

export default Color;
