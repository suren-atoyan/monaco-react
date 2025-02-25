import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

export default render;
