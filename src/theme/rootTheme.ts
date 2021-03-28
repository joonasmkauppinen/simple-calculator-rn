/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'styled-components';

const rootTheme: DefaultTheme = {
  color: {
    bgMain: '#161A24',
    'listItem-answer': '#77F8D9',
    'listItem-divider': '#3A445D',
    'listItem-equation': '#5B9298',
    'panel-background': '#232938',
    'panel-button-text': '#8A97BB',
    'panel-button-default': '#333B4D',
    'panel-button-delete': '#CD2C58',
    'panel-button-delete-glyph': '#FFC1D0',
    'panel-button-equals-end': '#50DCCB',
    'panel-button-equals-start': '#77F8D9',
    'panel-character': '#8A97BB',
    'panel-draggable': '#455171',
  },
  dimensions: {
    'panel-borderRadius': 30,
  },
  fonts: {
    medium: 'Rubik-Medium',
    regular: 'Rubik-Regular',
  },
};

export { rootTheme };
