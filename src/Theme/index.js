import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light400: '#a8a29e',
    primary700: '#0e7490',
    primary100: '#cffafe',
    yellow1: '#FFE168',
    yellow2: '#F6C543',
    orange1: '#FE8112',
    gray1: '#C4C4C4',
    gray2: '#666666',
    black1: '#212121',
  },
  fontSizes: {
    title1: 20,
    body1: 16,
  }
};
export default MyTheme;