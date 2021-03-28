import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ThemeColors, useTheme } from 'styled-components';
import icons, { IconNames } from './paths';

type Props = {
  name: IconNames;
  size?: number;
  fill?: keyof ThemeColors;
};

const DEFAULT_SIZE = 36;

const Icon: React.FC<Props> = ({ name, size = DEFAULT_SIZE, fill }) => {
  const theme = useTheme();
  const fillColor = fill ? theme.color[fill] : '#ffffff';
  const scale = size / DEFAULT_SIZE;

  return (
    <Svg width={size} height={size}>
      <Path d={icons[name].path} fill={fillColor} scale={scale} />
    </Svg>
  );
};

export default Icon;
