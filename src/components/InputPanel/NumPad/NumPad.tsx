/* eslint-disable react/no-array-index-key */
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Button from './NumPadButton';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(View)`
  height: 270px;
  align-self: center;
  width: 210px;
  justify-content: space-between;
`;

const Row = styled(View)`
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export type NumPadItem = {
  action?: unknown;
  glyph: string;
};

const NumPad: React.FC = () => {
  const numPadItems: NumPadItem[][] = [
    [{ glyph: '9' }, { glyph: '8' }, { glyph: '7' }],
    [{ glyph: '6' }, { glyph: '5' }, { glyph: '4' }],
    [{ glyph: '3' }, { glyph: '2' }, { glyph: '1' }],
    [{ glyph: '.' }, { glyph: '0' }, { glyph: 'c' }],
  ];

  return (
    <Wrapper>
      <Container>
        {numPadItems.map((row, rowIndex) => (
          <Row key={`num-pad-row-${rowIndex}`}>
            {row.map((item, i) => (
              <Button {...item} key={`num-pad-row-${rowIndex}-item-${i}`} />
            ))}
          </Row>
        ))}
      </Container>
    </Wrapper>
  );
};

export default NumPad;
