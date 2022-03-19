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
    chooseColorPaletteAtom
  );

  return (
    <>
      <header>
        <div className="logo">Flat UI Colors</div>
        <div onClick={() => setSoundTriger(!soundTriger)} className="sound-btn">
          {soundTriger ? 'Sound On 🔊' : 'Sound Off 🔇'}
        </div>
        <div onClick={() => setMenuTriger(!menuTriger)} className="more-color">
          {menuTriger ? '👇 See These Palettes!' : '👉Show More Colors🔥'}
        </div>
      </header>
      <aside
        className="menu"
        style={{ transform: menuTriger ? 'translate(0)' : 'translateX(220px)' }}
      >
        <ul>
          {ColorPaletteNames.map((palette) => (
            <li
              onClick={() => {
                setChooseColorPalette(palette.id);
                setMenuTriger(false);
              }}
              key={palette.id}
              className={palette.id === chooseColorPalette ? 'active' : ''}
            >
              <span>{palette.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Header;
