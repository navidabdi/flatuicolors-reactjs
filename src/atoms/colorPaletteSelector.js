import { selector } from 'recoil';
import { chooseColorPaletteAtom } from './chooseColorPaletteAtom';
import {
  PaletteV1Data,
  AmericanPalette,
  AussiePalette,
  BritishPalette,
  CanadianPalette,
  ChinesePalette,
  DutchPalette,
} from '../ColorData';
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
      case 6:
        return ChinesePalette;
      case 7:
        return DutchPalette;
      default:
        return PaletteV1Data;
    }
  },
});
