import React from 'react';

const Color = ({ color }) => {
  return (
    <div className="color" style={{ backgroundColor: color.hex }}>
      <p>{color.name}</p>
      {/* {console.log(color)} */}
    </div>
  );
};

export default Color;
