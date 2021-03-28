import React from 'react';
import { Pressable, Text } from 'react-native';
import styled, { css, useTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { color, font } from '../../../utils/style-utils';
import { OperationButton } from './OperatorButtons';
import Icon from '../../Icon';

const StyledPressable = styled(Pressable)<Pick<OperationButton, 'height' | 'buttonColor'>>`
  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          aspect-ratio: ${1 / 1};
        `};
  width: 60px;
  background-color: ${({ buttonColor }) =>
    typeof buttonColor === 'string' ? color(buttonColor) : color('panel-button-default')};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
  align-self: stretch;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)<Pick<OperationButton, 'glyphSize' | 'glyphColor' | 'glyphWeight'>>`
  font-family: ${({ glyphWeight }) => (glyphWeight === 'bold' ? font('medium') : font('regular'))};
  font-size: ${({ glyphSize }) => glyphSize || 32}px;
  color: ${({ glyphColor }) => (glyphColor ? color(glyphColor) : color('panel-button-text'))};
`;

const OperatorButton: React.FC<OperationButton> = ({
  buttonColor,
  glyph,
  glyphColor,
  glyphIcon,
  glyphSize,
  glyphWeight,
  height,
  operation,
}) => {
  const theme = useTheme();

  if (Array.isArray(buttonColor)) {
    const startColor = theme.color[buttonColor[0]];
    const endColor = theme.color[buttonColor[1]];

    return (
      <StyledPressable height={height}>
        <StyledLinearGradient colors={[startColor, endColor]}>
          <StyledText glyphSize={glyphSize} glyphColor={glyphColor} glyphWeight={glyphWeight}>
            {glyph}
          </StyledText>
        </StyledLinearGradient>
      </StyledPressable>
    );
  }

  return (
    <StyledPressable height={height} buttonColor={buttonColor}>
      {glyphIcon ? (
        <Icon name={glyphIcon} fill={glyphColor} size={glyphSize} />
      ) : (
        <StyledText glyphSize={glyphSize} glyphColor={glyphColor} glyphWeight={glyphWeight}>
          {glyph}
        </StyledText>
      )}
    </StyledPressable>
  );
};

export default OperatorButton;
