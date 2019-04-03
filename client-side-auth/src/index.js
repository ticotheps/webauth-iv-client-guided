import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Step 1: Install and import: react-router-dom, axios
// Step 2: Wrap <App /> inside of <Router></Router>

import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);


