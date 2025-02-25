/// <reference types="vite/client" />

import type { ExtendTheme } from '@pigment-css/react/theme';

declare module '@pigment-css/react/theme' {
  interface ThemeTokens {
    x: number;
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: 'light' | 'dark';
      tokens: ThemeTokens;
    }>;
  }
}
