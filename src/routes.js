import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <ToastContainer autoClose={3000} />
    </Switch>
  );
}
