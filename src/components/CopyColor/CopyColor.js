import React from 'react';
import './CopyColor.css';
import { useRecoilState } from 'recoil';
import { copyTrigerAtom } from '../../atoms/copyTrigerAtom';
const CopyColor = ({ copyTheColor }) => {
  const [copyTriger] = useRecoilState(copyTrigerAtom);
  const opacityVal = copyTriger ? 1 : 0;
  const scaleVal = copyTriger ? 'scale(1)' : 'scale(1.2)';
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
