/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { rootTheme } from './theme/rootTheme';
import AppContainer from './components/AppContainer';
import InputPanel from './components/InputPanel';
import ListItem from './components/ListItem';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={rootTheme}>
        <AppContainer>
          <ListItem equation="1+2+3+4" result="10" timestamp="now" />
          <ListItem equation="1+2+3+4" result="10" timestamp="now" />
          <ListItem equation="1+2+3+4" result="10" timestamp="now" />
          <ListItem active equation="1+2+3+4" result="10" timestamp="now" />
          <InputPanel />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
