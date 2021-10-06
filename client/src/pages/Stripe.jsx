import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pay from '../components/Pay';
import Success from '../components/Success';

const Stripe = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default Stripe;
