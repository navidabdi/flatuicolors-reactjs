import Color from './components/Color/Color';
import { PaletteV1Data } from './PaletteV1Data';
import './App.css';
const App = () => {
  return (
    <div className="app">
      {PaletteV1Data.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
};

export default App;
