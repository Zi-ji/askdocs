const primary = '#3F8EFC';
const dark = '#021a3c';
const darker = '#000F2C';

export default {
  light: {
    text: '#333',
    textHighlight: '#fff',
    title: '#fff',
    primary,
    secondary: '#FDFDFD',
    background: '#fff',
    inactiveBackground: '#64A8FD',
    pillBackground: '#F3F3F3',
    inputBackground: 'rgba(210, 210, 210, 0.3)',
    cardBackground: 'rgba(210, 210, 210, 0.25)',
    cardElevated: 'rgba(210, 210, 210, 0.35)',
    tabIconDefault: '#333',
    tabIconSelected: primary,
    placeholder: '#919191'
  },
  dark: {
    text: '#fff',
    textHighlight: '#fff',
    title: '#fff',
    primary: darker,
    secondary: '#021A3C',
    background: dark,
    inactiveBackground: '#283246',
    pillBackground: '#293A52',
    inputBackground: 'rgba(132, 132, 132, 0.3)',
    cardBackground: 'rgba(197, 197, 197, 0.25)',
    cardElevated: 'rgba(0, 0, 0, 0.2)',
    tabIconDefault: '#fff',
    tabIconSelected: primary,
    placeholder: '#9399A3'
  }
};
