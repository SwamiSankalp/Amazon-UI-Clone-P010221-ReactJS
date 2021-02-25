import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
          <h1>Checkout Page</h1>
        </Route>
        <Route path="/login">
        <Header />
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>      
    </div>
    </Router>
  );

}

  {
    /* WE NEED A REACT-ROUTER */
  }

  {
    /* localhost.com */
  }
      
  {
    /* localhost.com/checkout */
  }
      
  {
    /* localhost.com/login */
  }

export default App;
