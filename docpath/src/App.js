import './App.css';
import React from 'react';
import About from './About';
import { Router, Route} from "react-router"

function App() {
  return (
    <Router>
    <div className = "app">
      <Switch>
        <Route path = "/about">
          <About />
        </Route>
      
      </Switch>

           
    </div>
    </Router>
  );
}

export default App;
