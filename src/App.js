import Color from './components/Color/Color';
import './App.css';
import { useState } from 'react';
import CopyColor from './components/CopyColor/CopyColor';
import { useRecoilState, useRecoilValue } from 'recoil';
import { copyTrigerAtom } from './atoms/copyTrigerAtom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import sound from './assets/audio.m4a';
import { menuTrigerAtom } from './atoms/menuTrigerAtom';
import { colorPaletteSelector } from './atoms/colorPaletteSelector';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [menuTriger, setMenuTriger] = useRecoilState(menuTrigerAtom);
  const [chooseColorPalette, setChooseColorPalette] =
    useRecoilState(colorPaletteSelector);
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <>
      <Header />
      <div
        className="app"
        style={{
          width: menuTriger ? 'calc(100% - 220px)' : '100%',
        }}
      >
        {chooseColorPalette.map((color) => (
          <Color
            key={color.id}
            color={color}
            setCopyTheColor={setCopyTheColor}
            playSound={playSound}
          />
        ))}
        <CopyColor
          copyTheColor={copyTheColor}
          copyTriger={copyTriger}
          setCopyTriger={setCopyTriger}
        />
      </div>
      <audio className="sound-pick" src="./assets/audio.m4a"></audio>
      <Footer />
    </>
  );
};

export default App;
