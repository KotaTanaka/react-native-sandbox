import React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

export type TThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TTextProps = IThemeProps & DefaultText['props'];
export type TViewProps = IThemeProps & DefaultView['props'];
