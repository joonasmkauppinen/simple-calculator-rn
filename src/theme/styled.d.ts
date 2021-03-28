import 'styled-components';

declare module 'styled-components' {
  export type ThemeColors = {
    bgMain: string;
    'listItem-answer': string;
    'listItem-divider': string;
    'listItem-equation': string;
    'panel-background': string;
    'panel-button-default': string;
    'panel-button-delete': string;
    'panel-button-delete-glyph': string;
    'panel-button-equals-end': string;
    'panel-button-equals-start': string;
    'panel-button-text': string;
    'panel-character': string;
    'panel-draggable': string;
  };

  export type ThemeDimensions = {
    'panel-borderRadius': number;
  };

  export type ThemeFonts = {
    medium: string;
    regular: string;
  };

  export interface DefaultTheme {
    color: ThemeColors;
    dimensions: ThemeDimensions;
    fonts: ThemeFonts;
  }
}

// color: {
//       bgMain: string;
//       panel: {
//         background: string;
//         button: {
//           default: string;
//           delete: string;
//           equals: {
//             start: string;
//             end: string;
//           };
//         };
//         character: string;
//         draggable: string;
//       };
//       listItem: {
//         answer: string;
//         divider: string;
//         equation: string;
//       };
//     };
//     dimen: {
//       panel: {
//         borderRadius: number;
//       };
//     };
//     font: {
//       medium: string;
//       regular: string;
//     };
//   }
