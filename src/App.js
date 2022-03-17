import Color from './components/Color';
import { PaletteV1Data } from './PaletteV1Data';
const App = () => {
  return (
    <div className="App">
      <div>
        {PaletteV1Data.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default App;
