import React from 'react'
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom"
import Homepage from './Components/Pages/Homepage';
import Dashboard from "./Components/Pages/Dashboard"
import AddPlayer from "./Components/Pages/AddPlayer"
import Settings from "./Components/Pages/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add" component={AddPlayer} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
