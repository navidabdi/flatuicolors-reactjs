import React from 'react';
import { useRecoilState } from 'recoil';
import { menuTrigerAtom } from '../../atoms/menuTrigerAtom';
import { soundTrigerAtom } from '../../atoms/soundTrigerAtom';
import './Header.css';
const Header = () => {
  const [soundTriger, setSoundTriger] = useRecoilState(soundTrigerAtom);
  const [menuTriger, setMenuTriger] = useRecoilState(menuTrigerAtom);
  return (
    <>
      <header>
        <div className="logo">Flat UI Colors</div>
        <div onClick={() => setSoundTriger(!soundTriger)} className="sound-btn">
          {soundTriger ? 'Sound On 🔊' : 'Sound Off 🔇'}
        </div>
        <div onClick={() => setMenuTriger(!menuTriger)} className="more-color">
          {menuTriger ? '👉 Show More Colors' : '👇See These Palettes!'}
        </div>
      </header>
      <aside
        className="menu"
        style={{ transform: menuTriger ? 'translateX(220px)' : 'translate(0)' }}
      >
        <ul>
          <li>Palette v1</li>
          <li>American Palette</li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
