import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  global.document.getElementById('root'),
);
