import { atom } from 'recoil';
import { PaletteV1Data } from '../ColorData/PaletteV1Data';

export const chooseColorPaletteAtom = atom({
  key: 'chooseColorPaletteAtom',
  default: PaletteV1Data,
});
