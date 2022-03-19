import { selector } from 'recoil';
import { chooseColorPaletteAtom } from './chooseColorPaletteAtom';
import { PaletteV1Data } from '../ColorData/PaletteV1Data';
import { AmericanPalette } from '../ColorData/AmericanPalette';
import { AussiePalette } from '../ColorData/AussiePalette';
export const colorPaletteSelector = selector({
  key: 'colorPaletteSelector',
  get: ({ get }) => {
    const filter = get(chooseColorPaletteAtom);

    switch (filter) {
      case 1:
        return PaletteV1Data;
      case 2:
        return AmericanPalette;
      case 3:
        return AussiePalette;
      default:
        return PaletteV1Data;
    }
  },
});
