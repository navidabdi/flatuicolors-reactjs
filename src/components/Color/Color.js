import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { copyTrigerAtom } from '../../atoms/copyTrigerAtom';
import { soundTrigerAtom } from '../../atoms/soundTrigerAtom';
import './Color.css';

const Color = ({ color, setCopyTheColor, playSound }) => {
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [soundTriger, setSoundTriger] = useRecoilState(soundTrigerAtom);
  return (
    <>
      <div
        onClick={() => {
          setCopyTheColor(color.hex);
          setCopyTriger(true);
          if (soundTriger) playSound();
          setTimeout(() => {
            setCopyTriger(false);
          }, 1000);
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
