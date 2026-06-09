import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/react-start-client';

function mount() {
  const el = document.getElementById('root') ?? (() => {
    const d = document.createElement('div');
    d.id = 'root';
    document.body.appendChild(d);
    return d;
  })();

  hydrateRoot(el, <StartClient />);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}

export {};
