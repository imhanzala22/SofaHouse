import React from 'react';
import './Card.css'
import {Card,Button,Col} from 'react-bootstrap';
import image from '../../Assets/CardImages/1.jpg'
const Cards = () => {
    return ( <div>
            <Col md={4}>
            <Card className='cardmarg' style={{ width: '18rem' }}>
                
                    <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                         <Card.Img variant="top" src={image} />
                             <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                             </Card.Text>
                                 <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
           </Card>
           </Col>
    </div> );
}
 
export default Cards;