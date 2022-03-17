import Color from './components/Color/Color';
import { PaletteV1Data } from './PaletteV1Data';
import './App.css';
import { useState } from 'react';
import CopyColor from './components/CopyColor/CopyColor';
import { useRecoilState, useRecoilValue } from 'recoil';
import { copyTrigerAtom } from './atoms/copyTrigerAtom';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);

  return (
    <div className="app">
      {console.log(copyTriger)}
      {PaletteV1Data.map((color) => (
        <Color key={color.id} color={color} setCopyTheColor={setCopyTheColor} />
      ))}
      <CopyColor
        copyTheColor={copyTheColor}
        copyTriger={copyTriger}
        setCopyTriger={setCopyTriger}
      />
    </div>
  );
};

export default App;
