import React from 'react';
import home from './components/home';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Carousel from './components/Carousel';



function App() {
  return (
    <Router>
     <Navbar/>
    <Switch>
    <Route path="/Carousel" component={Carousel} />
    
    <Route path="/" exact component={home}  />  
   </Switch>
  
  </Router>
  );
}

export default App;
