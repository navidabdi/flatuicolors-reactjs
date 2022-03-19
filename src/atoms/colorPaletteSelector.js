import { selector } from 'recoil';
import { chooseColorPaletteAtom } from './chooseColorPaletteAtom';
import { PaletteV1Data } from '../ColorData/PaletteV1Data';
import { AmericanPalette } from '../ColorData/AmericanPalette';
import { AussiePalette } from '../ColorData/AussiePalette';
import { BritishPalette } from '../ColorData/BritishPalette';
import { CanadianPalette } from '../ColorData/CanadianPalette';
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
      case 4:
        return BritishPalette;
      case 5:
        return CanadianPalette;
      default:
        return PaletteV1Data;
    }
  },
});
