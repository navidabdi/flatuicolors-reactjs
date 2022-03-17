import Color from './components/Color/Color';
import { PaletteV1Data } from './PaletteV1Data';
import './App.css';
import { useState } from 'react';
import CopyColor from './components/CopyColor/CopyColor';
const App = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  // const [showCopy, setShowCopy] = useState(false);

  return (
    <div className="app">
      {PaletteV1Data.map((color) => (
        <Color key={color.id} color={color} setCopyTheColor={setCopyTheColor} />
      ))}
      {copyTheColor && <CopyColor copyTheColor={copyTheColor} />}
      {setTimeout(() => {
        setCopyTheColor(null);
      }, 1500)}
    </div>
  );
};

export default App;
