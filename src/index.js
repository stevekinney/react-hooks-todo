import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './application';
import reportWebVitals from './report-web-vitals';

import './index.css';
import { ItemsProvider } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ItemsProvider>
      <Application />
    </ItemsProvider>
  </React.StrictMode>,
);

reportWebVitals();
