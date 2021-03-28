import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import NumPad from './NumPad';
import OperationButtons from './OperatorButtons';
import { color, dimen } from '../../utils/style-utils';

const Panel = styled(View)`
  background-color: ${color('panel-background')};
  border-top-left-radius: ${dimen('panel-borderRadius')}px;
  border-top-right-radius: ${dimen('panel-borderRadius')}px;
  padding-bottom: 50px;
`;

const DragHandleContainer = styled(View)`
  align-items: center;
`;

const DragHandle = styled(View)`
  background-color: ${color('panel-draggable')};
  height: 4px;
  width: 62px;
  margin-vertical: 12px;
`;

const ButtonsContainer = styled(View)`
  flex-direction: row;
  align-self: stretch;
  justify-content: flex-end;
`;

const InputPanel: React.FC = () => (
  <Panel>
    <DragHandleContainer>
      <DragHandle />
    </DragHandleContainer>
    <ButtonsContainer>
      <NumPad />
      <OperationButtons />
    </ButtonsContainer>
  </Panel>
);

export default InputPanel;
