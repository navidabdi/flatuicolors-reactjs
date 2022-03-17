import React, { useState } from 'react';
import './Color.css';

const Color = ({ color, setCopyTheColor }) => {
  return (
    <>
      <div
        onClick={() => setCopyTheColor(color.hex)}
        className="color"
        style={{ backgroundColor: color.hex }}
      >
        <p className="color__name">{color.name}</p>
      </div>
    </>
  );
};

export default Color;
