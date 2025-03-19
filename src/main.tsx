import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from '@/pages/home';

import '@/styles/globals.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
