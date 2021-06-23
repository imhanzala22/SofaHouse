import React from 'react';
import home from './components/home';
import Navbar from './components/Navbar'
// import Carousel from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router>
     <Navbar/>
    <Switch>
      
    {/* <Route path="/Carousel" exact component={Carousel}  />   */}
    <Route path="/" exact component={home}  />  
   </Switch>
  
  </Router>
  );
}

export default App;
