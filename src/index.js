import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';
import DayTwo from "./DayTwo";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App path="/" />
        <DayTwo path="/daytwo" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);