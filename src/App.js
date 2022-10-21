import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  //if there is defined user it will go to homescreen

  return <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
    </Router>
  </div>;
}

export default App;