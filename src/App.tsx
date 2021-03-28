/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { rootTheme } from './theme/rootTheme';
import AppContainer from './components/AppContainer';
import InputPanel from './components/InputPanel';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={rootTheme}>
        <AppContainer>
          <InputPanel />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
