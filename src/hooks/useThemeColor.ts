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
  }

  return Colors[theme][colorName];
};

export default useThemeColor;
