import Color from './components/Color/Color';
import { PaletteV1Data } from './PaletteV1Data';
import './App.css';
import { useState } from 'react';
import CopyColor from './components/CopyColor/CopyColor';
import { useRecoilState, useRecoilValue } from 'recoil';
import { copyTrigerAtom } from './atoms/copyTrigerAtom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);

  return (
    <>
      <Header />
      <div className="app">
        {console.log(copyTriger)}
        {PaletteV1Data.map((color) => (
          <Color
            key={color.id}
            color={color}
            setCopyTheColor={setCopyTheColor}
          />
        ))}
        <CopyColor
          copyTheColor={copyTheColor}
          copyTriger={copyTriger}
          setCopyTriger={setCopyTriger}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
