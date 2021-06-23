import React from 'react'
import { Nav,Container,Navbar,FormControl,Button,Form } from 'react-bootstrap';

const navbar = () => {
    return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">SOFA HOUSE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Single Seat sofa</Nav.Link>
        <Nav.Link href="#link">Double Seat sofa</Nav.Link>
        <Nav.Link href="#link">three seeter sofa</Nav.Link>
       
      </Nav>
      <Nav >
        <Nav.Link href="#link">Sign In</Nav.Link>
        <Nav.Link href="#link">Sign up</Nav.Link>
        </Nav>
      
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    );
}
 
export default navbar;