import React from 'react';
import { hydrateRoot } from 'react-dom/client';

async function mountApp() {
  const el = document.getElementById('root') ?? (() => {
    const d = document.createElement('div');
    d.id = 'root';
    document.body.appendChild(d);
    return d;
  })();

  try {
    const mod = await import('@tanstack/react-start-client');
    const StartClient = mod.StartClient ?? mod.default;
    hydrateRoot(el, React.createElement(StartClient));
  } catch (err) {
    // Fallback: mount a client-only router if StartClient isn't available
    try {
      const [{ RouterProvider }, { getRouter }] = await Promise.all([
        import('@tanstack/react-router'),
        import('./router'),
      ]);
      const router = getRouter();
      hydrateRoot(el, React.createElement(RouterProvider, { router }));
    } catch (e) {
      // Last resort: render a minimal message so page doesn't stay blank
      hydrateRoot(el, React.createElement('div', null, 'App failed to initialize.'));
      // eslint-disable-next-line no-console
      console.error('Client mount fallback failed', e);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  void mountApp();
}

export {};
