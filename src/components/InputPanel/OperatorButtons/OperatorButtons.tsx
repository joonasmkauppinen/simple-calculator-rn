import React from 'react';
import { View } from 'react-native';
import styled, { ThemeColors } from 'styled-components';
import { IconNames } from '../../Icon/paths';
import Button from './OperatorButton';

const Container = styled(View)`
  height: 300px;
  flex-direction: row;
`;

const Column = styled(View)<{ index: number }>`
  justify-content: space-between;
  margin-right: ${({ index }) => (index === 0 ? '20px' : '16px')};
`;

export type OperationButton = {
  action?: unknown;
  buttonColor?: keyof ThemeColors | (keyof ThemeColors)[];
  glyph: string;
  glyphColor?: keyof ThemeColors;
  glyphIcon?: IconNames;
  glyphSize?: number;
  glyphWeight?: 'bold' | 'normal';
  height?: number;
  operation?: string;
};

const OperatorButtons: React.FC = () => {
  const operationButtons: OperationButton[][] = [
    [
      { glyph: '÷', operation: '/', glyphSize: 36 },
      { glyph: '×', operation: '*' },
      { glyph: '-', operation: '-', glyphSize: 36 },
      { glyph: '+', operation: '+', glyphSize: 30 },
    ],
    [
      { glyph: '( )', glyphSize: 26 },
      {
        glyph: 'DEL',
        glyphIcon: 'delete',
        glyphSize: 40,
        glyphColor: 'panel-button-delete-glyph',
        buttonColor: 'panel-button-delete',
      },
      {
        glyph: '=',
        glyphSize: 35,
        glyphColor: 'panel-background',
        glyphWeight: 'bold',
        height: 140,
        buttonColor: ['panel-button-equals-start', 'panel-button-equals-end'],
      },
    ],
  ];

  return (
    <Container>
      {operationButtons.map((column, i) => (
        <Column index={i} key={`operator-button-column-${i}`}>
          {column.map((item) => (
            <Button {...item} key={`operator-button-${item.glyph}`} />
          ))}
        </Column>
      ))}
    </Container>
  );
};

export default OperatorButtons;
