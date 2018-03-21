import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import AppHeader from '../components/AppHeader';
import HelpPage from '../components/HelpPage';
import TestForm from '../components/TestForm';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppHeader />
      <Switch>
        <Route path='/' component={ SignupForm } exact={true} />
        <Route path='/test' component={ TestForm } />
        <Route path='/help' component={ HelpPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;