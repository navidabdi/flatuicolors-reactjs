import { atom } from 'recoil';
import { PaletteV1Data } from '../ColorData/PaletteV1Data';
import { AmericanPalette } from '../ColorData/AmericanPalette';

export const chooseColorPaletteAtom = atom({
  key: 'chooseColorPaletteAtom',
  default: {
    id: 1,
    palette: PaletteV1Data,
  },
});