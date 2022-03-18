import React from 'react';
import { useRecoilState } from 'recoil';
import { soundTrigerAtom } from '../../atoms/soundTrigerAtom';
import './Header.css';
const Header = () => {
  const [soundTriger, setSoundTriger] = useRecoilState(soundTrigerAtom);
  return (
    <header>
      <div className="logo">Flat UI Colors</div>
      <div onClick={() => setSoundTriger(!soundTriger)} className="sound-btn">
        {soundTriger ? 'Sound On 🔊' : 'Sound Off 🔇'}
      </div>
    </header>
  );
};

export default Header;
