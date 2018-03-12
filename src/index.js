import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'semantic-ui-react';
import SignupForm from './components/SignupForm';
import 'semantic-ui-css/semantic.min.css';
import './style/style.scss';
const str = (
  <Button />
);

ReactDOM.render(<SignupForm />, document.getElementById('app'));