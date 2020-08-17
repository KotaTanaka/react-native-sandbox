import React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

// from app
import Colors from 'app/constants/Colors';
import useColorScheme from 'app/hooks/useColorScheme';

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
): string => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};

interface IThemeProps {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = IThemeProps & DefaultText['props'];
export type ViewProps = IThemeProps & DefaultView['props'];

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View: React.FC<ViewProps> = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
