import React from 'react';

// from app
import { Text, TextProps } from 'app/components/Themed';

export const MonoText: React.FC<TextProps> = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
