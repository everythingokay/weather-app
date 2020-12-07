import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "@reach/router";
import Day from "./Day";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App path="/" />
        <Day path="/day/:dayNumber" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);