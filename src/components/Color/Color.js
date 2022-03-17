import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { copyTrigerAtom } from '../../atoms/copyTrigerAtom';
import './Color.css';

const Color = ({ color, setCopyTheColor }) => {
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);

  return (
    <>
      <div
        onClick={() => {
          setCopyTheColor(color.hex);
          setCopyTriger(true);
          setTimeout(() => {
            setCopyTriger(false);
          }, 1500);
        }}
        className="color"
        style={{ backgroundColor: color.hex }}
      >
        <p className="color__name">{color.name}</p>
      </div>
    </>
  );
};

export default Color;
