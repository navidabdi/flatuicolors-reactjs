import React from 'react';
import { useRecoilState } from 'recoil';
import {
  chooseColorPaletteAtom,
  menuTrigerAtom,
  soundTrigerAtom,
} from '../../atoms';
import { ColorPaletteNames } from '../../ColorData';
import './Header.css';
const Header = () => {
  const [soundTriger, setSoundTriger] = useRecoilState(soundTrigerAtom);
  const [menuTriger, setMenuTriger] = useRecoilState(menuTrigerAtom);

  const [chooseColorPalette, setChooseColorPalette] = useRecoilState(
    chooseColorPaletteAtom,
  );

  return (
    <div className="header">
      <header>
        <a href="/">
          <h1 className="logo">وبکیما فلت کالر</h1>
        </a>
        <div onClick={() => setSoundTriger(!soundTriger)} className="sound-btn">
          {soundTriger ? 'با صدا 🔊' : 'ساکت 🔇'}
        </div>
        <div onClick={() => setMenuTriger(!menuTriger)} className="more-color">
          {menuTriger ? '👇 رنگ‌ها رو ببین' : 'رنگ‌های بیشتر🔥'}
        </div>
      </header>
      <nav
        className="menu"
        style={{ transform: menuTriger ? 'translate(0)' : 'translateX(220px)' }}
      >
        <ul>
          {ColorPaletteNames.map((palette) => (
            <li
              onClick={() => {
                setChooseColorPalette(palette.id);
                // setMenuTriger(false);
              }}
              key={palette.id}
              className={palette.id === chooseColorPalette ? 'active' : ''}
            >
              <span>{palette.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
