// Импорт не используется, нужно убрать
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './shared/App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App></App>);
