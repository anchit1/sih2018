import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react';
import SignupForm from './components/SignupForm';
import AppRouter from './router/AppRouter';
import 'semantic-ui-css/semantic.min.css';
import './style/style.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));