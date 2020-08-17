import React from 'react';
import { Text as DefaultText } from 'react-native';

// from app
import { TTextProps } from 'app/types/components';
import useThemeColor from 'app/hooks/useThemeColor';

export const Text: React.FC<TTextProps> = (props: TTextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const MonoText: React.FC<TTextProps> = (props: TTextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
};

export default Text;
