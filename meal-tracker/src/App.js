import React from "react";
import styles from "./index.css";
import { Navbar } from "./components/index";

// import {
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   Redirect
// } from "react-router-dom";

const { appWrapper } = styles;

const App = props => {
  return (
    <div className={appWrapper}>
      <Navbar />
    </div>
  );
};

export default App;
