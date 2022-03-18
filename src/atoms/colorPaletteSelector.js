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
      case 'PaletteV1Data':
        return PaletteV1Data;
      case 'AmericanPalette':
        return AmericanPalette;
      case 'AussiePalette':
        return AussiePalette;
      default:
        return AmericanPalette;
    }
  },
});
