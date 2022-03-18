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
        {console.log(chooseColorPalette)}
        <div className="logo">Flat UI Colors</div>
        <div onClick={() => setSoundTriger(!soundTriger)} className="sound-btn">
          {soundTriger ? 'Sound On 🔊' : 'Sound Off 🔇'}
        </div>
        <div onClick={() => setMenuTriger(!menuTriger)} className="more-color">
          {menuTriger ? '👇See These Palettes!' : '👉 Show More Colors'}
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
                setChooseColorPalette(palette.dataName);
                setMenuTriger(false);
              }}
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
