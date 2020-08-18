// from app
import Colors from 'app/constants/Colors';
import useColorScheme from 'app/hooks/useColorScheme';
import { ThemeColorProps } from 'app/types/components';

export const useThemeColor = (
  props: ThemeColorProps,
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
): string => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
};

export default useThemeColor;
