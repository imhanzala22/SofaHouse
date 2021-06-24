import React from 'react'
import { Nav,Container,Navbar,FormControl,Button,Form } from 'react-bootstrap';
import './Navbar.css'

const navbar = () => {
    return (
    <div>
        <Navbar bg="light" expand="lg"  sticky="top" >
                  <Container>
                    
                    <Navbar.Brand href="#home">SOFA HOUSE</Navbar.Brand>
                 <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button expand="outline-success">Search</Button>
                  </Form>
                     <Nav className='Navspace'>
                        <Nav.Link href="#link">Sign In</Nav.Link>
                        <Nav.Link href="#link">Sign up</Nav.Link>
                     </Nav>
                  </Container>
        </Navbar>
  <>
        
        <Navbar bg="light" expand="lg" >
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center">
                      <Nav  className="me-auto">
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Single Seat sofa</Nav.Link>
                        <Nav.Link href="#link">Double Seat sofa</Nav.Link>
                        <Nav.Link href="#link">three seeter sofa</Nav.Link>
                        <Nav.Link href="#link">Deewan</Nav.Link>
                        <Nav.Link href="#link">velvot sofa</Nav.Link>
                        <Nav.Link href="#link">Leather sofa</Nav.Link>
                      
                      </Nav>
                    </Navbar.Collapse>
         
        </Navbar>
        </>
    </div>
    );
}
 
export default navbar;