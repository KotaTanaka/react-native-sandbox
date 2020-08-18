import React from 'react';
import { View as DefaultView } from 'react-native';

// from app
import useThemeColor from 'app/hooks/useThemeColor';
import { ViewProps } from 'app/types/components';

export const View: React.FC<ViewProps> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default View;
