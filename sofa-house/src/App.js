import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/home';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
    <div className='app'>
      <Switch>
      <Route path="/Navbar" exact component={Navbar} />  
      <Route path="/" exact component={Home} />  
      </Switch>
    </div>
    </Router>
    
    
    
  );
}

export default App;
