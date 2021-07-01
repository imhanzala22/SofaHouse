import React from 'react'
import './home.css'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card';
import image from '../../Assets/CardImages/1.jpg'
import {Row, Container} from 'react-bootstrap';

const Home = () => {
    return ( <div>
     
    
      <Carousel/>
    
      <h1>
        New Trends
      </h1>
      <p>Find out your desire style in sofa's Dewaan in differnt clothes</p>
      <Container>
        <Row>
      <Card/>
      <Card/>
      <Card/>
      </Row>
      <Row >
        <img src={image} width='100%' height='500px' alt="full image" />
      </Row>
      </Container>
      
      
      
    </div> );
}
 
export default Home;