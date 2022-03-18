import Color from './components/Color/Color';
import { PaletteV1Data } from './ColorData/PaletteV1Data';
import './App.css';
import { useState } from 'react';
import CopyColor from './components/CopyColor/CopyColor';
import { useRecoilState, useRecoilValue } from 'recoil';
import { copyTrigerAtom } from './atoms/copyTrigerAtom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import sound from './assets/audio.m4a';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <>
      <Header />
      {/* {console.log(Sound)} */}
      <div className="app">
        {PaletteV1Data.map((color) => (
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
