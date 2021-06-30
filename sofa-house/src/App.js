import React from 'react';
import home from './components/home/home';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/Footer/Footer';







function App() {
  return (
    <Router>
     <Navbar/>
    <Switch> 
  
    <Route path="/" exact component={home}  />  
   </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
