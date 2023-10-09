import { DefaultTheme } from 'styled-components';

const colors = {
    black: '#1e1f1d',
    yellow: '#edb83c',
    orange: '#eb7952',
    gray: '#6e6e6e',
    gray_background: '#f5f5f5',
    primary: '#FAFAFA',
    secondary: '#FFC80A',
    tertiary: '#303030',
    background: '#ffffff',
    text: '#000000',
    primaryTextColor: '#594F43',
    secondaryTextColor: '#777777',
    inputPlaceholder: '#C7C7C7',
    darkGrayText: '#303030',
    darkText: '#1A1A1A',
    white: '#ffffff',
    dark: '',
    medium: '',
    light: '',
    danger: '',
    success: '#66A15A',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
    colors,
};
