import React from 'react';
import {Card,Button} from 'react-bootstrap';
import image from '../../Assets/CardImages/1.jpg'
const Cards = () => {
    return ( <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                             </Card.Text>
                                 <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
           </Card>
    </div> );
}
 
export default Cards;