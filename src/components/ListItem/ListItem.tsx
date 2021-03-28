import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { color, font } from '../../utils/style-utils';

type Props = {
  active?: boolean;
  equation: string;
  result: string;
  timestamp: string;
};

type StyleProps = Pick<Props, 'active'>;

const Container = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${color('list-item-divider')};
  margin-horizontal: 16px;
  padding-vertical: 16px;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const ResultRow = styled(Row)`
  justify-content: flex-end;
`;

const BaseText = styled(Text)<StyleProps>`
  font-family: ${font('medium')};
  color: ${({ active }) => (active ? color('list-item-equation') : color('list-item-inactive'))};
`;

const Timestamp = styled(BaseText)`
  font-size: 12px;
`;

const Equation = styled(BaseText)`
  font-size: 22px;
`;

const Result = styled(BaseText)<StyleProps>`
  color: ${({ active }) => (active ? color('list-item-answer') : color('list-item-inactive'))};
  font-size: 43px;
  font-family: ${font('regular')};
`;

const ListItem: React.FC<Props> = ({ active, equation, result, timestamp }) => {
  return (
    <Container>
      <Row>
        <Timestamp active={active}>{timestamp}</Timestamp>
        <Equation active={active}>{equation}</Equation>
      </Row>
      <ResultRow>
        <Result active={active}>{result}</Result>
      </ResultRow>
    </Container>
  );
};

export default ListItem;
