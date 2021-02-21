import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Paragraph = styled(Text)`
  font-size: 23px;
  font-family: 'Rubik-Regular';
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Wrapper>
        <Paragraph>lol empty</Paragraph>
      </Wrapper>
    </>
  );
};

export default App;
