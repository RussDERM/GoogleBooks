import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Library from "./pages/Library";
import Home from "./pages/Home";
import NoResults from "./pages/NoResults";
import './App.css';

function App() {
  return (
    //router
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/saved" component={ Library } />
          <Route exact path="/saved/:id" component={ Library } />          
          <Route component={ NoResults } />
        </Switch>
      </div>
    </Router>
    //exact paths
    // saved
    // saved/:id 
  );
}

export default App;
