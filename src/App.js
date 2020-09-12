import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Product from './Product';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={Product} />
    </Switch>
  );
}

export default App;
