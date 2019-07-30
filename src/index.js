import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Home />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
