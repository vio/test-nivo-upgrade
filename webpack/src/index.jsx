import React from 'react';
import { createRoot } from 'react-dom/client';

import { MyResponsiveLine } from './nivo-chart';

const App = () => (
  <div style={{ position: 'relative', width: '100%', aspectRatio: '2/1' }}>
    <MyResponsiveLine />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);
