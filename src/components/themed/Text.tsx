import React from 'react';
import { Text as DefaultText } from 'react-native';

// from app
import useThemeColor from 'app/hooks/useThemeColor';
import { TextProps } from 'app/types/components';

export const Text: React.FC<TextProps> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const MonoText: React.FC<TextProps> = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
};

export default Text;
