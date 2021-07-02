import React from 'react';
import home from './components/home/home';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import SignIn from './components/logs/SignIn';







function App() {
  return (
    <Router>
     <Navbar/>
    <Switch> 
  
    <Route path="/Product" exact component={Product}  />  
    <Route path="/SingleSofaSet" exact component={Product}  />  
    <Route path="/DoubleSofaSet" exact component={Product}  />  
    <Route path="/TrippleSofaSet" exact component={Product}  />  
    <Route path="/Deewan" exact component={Product}  />  
    <Route path="/LeatherSofa" exact component={Product}  />  
    <Route path="/VelvotSofa" exact component={Product}  />  
    <Route path="/SignIn" exact component={SignIn}  />  
    <Route path="/" exact component={home}  />  
   </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
