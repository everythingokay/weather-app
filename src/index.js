import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from "@reach/router";
// import DayTwo from "./DayTwo";
// import DayThree from "./DayThree";
// import DayFour from "./DayFour";
// import DayFive from "./DayFive";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App path="/" />
        {/* <DayTwo path="/daytwo" />
        <DayThree path="/daythree" />
        <DayFour path="/dayfour" />
        <DayFive path="/dayfive" /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);