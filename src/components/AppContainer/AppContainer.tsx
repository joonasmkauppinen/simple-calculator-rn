import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { color } from '../../utils/style-utils';

const StyledSafeArea = styled(View)`
  /* align-items: flex-end; */
  justify-content: flex-end;
  flex: 1;
  /* flex-direction: column-reverse; */
  background-color: ${color('bgMain')};
`;

const AppContainer: React.FC = ({ children }) => <StyledSafeArea>{children}</StyledSafeArea>;

export default AppContainer;
