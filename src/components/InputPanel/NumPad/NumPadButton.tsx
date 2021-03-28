import React from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components';
import { color, font } from '../../../utils/style-utils';
import { NumPadItem } from './NumPad';

const StyledPressable = styled(Pressable)`
  aspect-ratio: ${1 / 1};
  align-items: center;
  justify-content: center;
  width: 60px;
`;

const StyledText = styled(Text)`
  font-family: ${font('regular')};
  font-size: 32px;
  color: ${color('panel-button-text')};
  padding: 12px;
`;

const NumPadButton: React.FC<NumPadItem> = ({ glyph }) => {
  return (
    <StyledPressable>
      <StyledText>{glyph}</StyledText>
    </StyledPressable>
  );
};

export default NumPadButton;
