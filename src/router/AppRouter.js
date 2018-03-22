import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import AppHeader from '../components/AppHeader';
import HelpPage from '../components/HelpPage';
import TestForm from '../components/TestForm';
import HomePage from '../components/HomePage';
import MainContent from '../components/MainContent';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppHeader />
      <div style={{ marginTop: 76 }}>
        <Switch>
          <Route path='/' component={ HomePage } exact={true} />
          <Route path='/test' component={ TestForm } />
          <Route path='/help' component={ HelpPage } />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;