import React from 'react';
import BImage from '../BigImage/BImage';
import { Container,Row } from 'react-bootstrap';
import Cards from '../Card/Card';
const Product = () => {
    return ( 
    
    <div>
        <Container>
            <h1>Dummy data</h1>
            <Row>
        <BImage/>
        </Row>
        <h1> more sofa's</h1>
        <Row>
           
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </Row>
        <h1>related Items</h1>
        <Row>
            <Cards/>
            <Cards/>
            <Cards/>
        </Row>

        </Container>
        
    </div>
     );
}
 
export default Product;