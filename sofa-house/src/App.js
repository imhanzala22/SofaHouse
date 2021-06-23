import React from 'react';
import home from './components/home';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router>
     
    <Switch>
      
    <Route path="/" exact component={Navbar}  />  
    <Route path="/" exact component={home}  />  
   </Switch>
  
  </Router>
  );
}

export default App;
