import React from 'react';
import { View as DefaultView } from 'react-native';

// from app
import { TViewProps } from 'app/types/components';
import useThemeColor from 'app/hooks/useThemeColor';

export const View: React.FC<TViewProps> = (props: TViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default View;
