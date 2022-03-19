import './App.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import sound from './assets/audio.m4a';

import { CopyColor, Color, Footer, Header } from './components';

import { colorPaletteSelector, copyTrigerAtom, menuTrigerAtom } from './atoms';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [menuTriger] = useRecoilState(menuTrigerAtom);
  const [chooseColorPalette] = useRecoilState(colorPaletteSelector);
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
