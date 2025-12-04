// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import {Platform} from 'react-native';

export const customFontsToLoad = {};

const fonts = {
  dancingScript: {
    normal: 'DancingScript-Regular',
    bold: 'DancingScript-Bold',
    medium: 'DancingScript-Medium',
    semiBold: 'DancingScript-SemiBold',
  },
  scienceGothic: {
    black: 'ScienceGothic_Condensed-Black',
    bold: 'ScienceGothic_Condensed-Bold',
  }
};

export const typography = {
  fonts,
  primary: fonts.dancingScript,
  secondary: fonts.scienceGothic,
};
