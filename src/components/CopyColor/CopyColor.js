import React from 'react';
import './CopyColor.css';
const CopyColor = ({ copyTheColor }) => {
  const opacityVal = copyTheColor ? 1 : 0;
  const scaleVal = copyTheColor ? 'translateY(0)' : 'translateY(150px)';
  return (
    <div
      className="copycolor"
      style={{ backgroundColor: copyTheColor, opacity: opacityVal }}
    >
      <div className="data" style={{ transform: scaleVal }}>
        <h1 style={{ textShadow: `2px 2px ${copyTheColor}` }}>GOT IT!</h1>
        <p>{copyTheColor}</p>
      </div>
    </div>
  );
};

export default CopyColor;
