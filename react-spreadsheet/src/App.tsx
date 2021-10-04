import React from "react";
import { Axios } from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
