import React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ThemeColorProps = {
  light?: string;
  dark?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
