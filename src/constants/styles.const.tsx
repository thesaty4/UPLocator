/** @type {import('tailwindcss').Config} */

import {TextStyle, ViewStyle} from 'react-native';

export const commonStyles = {
  bShadowXSM: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 0.6,
    borderColor: 'gray',
  },
  bShadowSM: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  bShadowMD: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  bShadowLG: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  bShadowXL: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  textShadow: {
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // shadow color
    textShadowOffset: {width: 2, height: 2}, // shadow offset (x, y)
    textShadowRadius: 5, // shadow blur radius
  },
  textShadowN: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)', // shadow color
    textShadowOffset: {width: 0.5, height: 0}, // shadow offset (x, y)
    textShadowRadius: 5,
  },
} satisfies Record<string, ViewStyle | TextStyle>;
