import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { extendTheme, pigment } from '@pigment-css/vite-plugin';

// To learn more about theming, visit https://github.com/mui/pigment-css/blob/master/README.md#theming
const theme = extendTheme({
  colors: {
    primary: 'tomato',
    secondary: 'cyan',
  },
  spacing: {
    unit: 8,
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      theme,
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['react-is', 'prop-types'],
  },
});
