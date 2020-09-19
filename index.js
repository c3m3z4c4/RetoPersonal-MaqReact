import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Order from './src/components/Order';

const container = document.getElementById('app');

ReactDOM.render(<Order />, container);
