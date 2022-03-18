import React from 'react';
import { useRecoilState } from 'recoil';
import { chooseColorPaletteAtom } from '../../atoms/chooseColorPaletteAtom';
import { menuTrigerAtom } from '../../atoms/menuTrigerAtom';
import { soundTrigerAtom } from '../../atoms/soundTrigerAtom';
import { ColorPaletteNames } from '../../ColorData/ColorPaletteNames';
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
          {menuTriger ? '👉 Show More Colors' : '👇See These Palettes!'}
        </div>
      </header>
      <aside
        className="menu"
        style={{ transform: menuTriger ? 'translateX(220px)' : 'translate(0)' }}
      >
        <ul>
          {ColorPaletteNames.map((palette) => (
            <li
              onClick={() => setChooseColorPalette(palette.id)}
              key={palette.id}
            >
              {palette.name}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Header;
