import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

const routing = (
  <BrowserRouter>
      <Route path='/' component={App} />
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
