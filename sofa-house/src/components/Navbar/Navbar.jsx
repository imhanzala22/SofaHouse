import React from 'react'
import {Link} from 'react-router-dom'
import { Nav,Container,Navbar,FormControl,Button,Form } from 'react-bootstrap';
import './Navbar.css'

const navbar = () => {
    return (
    <div>
        <Navbar bg="light" expand="lg">
                  <Container>
                    
                <Link to='/'>    <Navbar.Brand >SOFA HOUSE</Navbar.Brand></Link>
                 <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button expand="outline-success">Search</Button>
                  </Form>
                    
                  </Container>
        </Navbar>
  <>
        
        <Navbar bg="light" expand="lg" >
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center">
                      <Nav  className="me-auto">
                        {/* <Nav href="#home">Home</Nav> */}
                        <Link to="./SingleSofaSet"><Nav >Single Seat sofa</Nav></Link>
                       <Link to="/DoubleSofaSet"> <Nav >Double Seat sofa</Nav></Link>
                       <Link to="/TrippleSofaSet"> <Nav >three seeter sofa</Nav> </Link>
                       <Link to="/Deewan"> <Nav >Deewan</Nav></Link>
                       <Link to="/LeatherSofa"> <Nav >velvot sofa</Nav></Link>
                       <Link to="/VelvotSofa"> <Nav >Leather sofa</Nav></Link>
                      
                      </Nav>
                    </Navbar.Collapse>
         
        </Navbar>
        </>
    </div>
    );
}
 
export default navbar;