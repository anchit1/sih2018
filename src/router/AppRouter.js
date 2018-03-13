import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import AppHeader from '../components/AppHeader';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppHeader />
      <Switch>
        <Route path='/' component={ SignupForm } exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;