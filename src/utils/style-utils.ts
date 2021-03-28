import { View, ViewProps } from 'react-native';
import {
  DefaultTheme,
  ThemeColors,
  ThemeDimensions,
  ThemedStyledProps,
  ThemeFonts,
} from 'styled-components';

type StyledProps = ThemedStyledProps<ViewProps & React.RefAttributes<View>, DefaultTheme>;

// @ts-ignore
export const color = (path: keyof ThemeColors): string => ({ theme }: StyledProps) =>
  theme.color[path];

// @ts-ignore
export const dimen = (path: keyof ThemeDimensions): number => ({ theme }: StyledProps) =>
  theme.dimensions[path];

// @ts-ignore
export const font = (path: keyof ThemeFonts): string => ({ theme }: StyledProps) =>
  theme.fonts[path];
