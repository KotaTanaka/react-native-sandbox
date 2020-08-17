import * as React from 'react';

// from app
import { Text, TextProps } from 'app/components/Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
