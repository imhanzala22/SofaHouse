import React from 'react'
import './home.css'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card';

import {Row, Container} from 'react-bootstrap';
import BImage from '../BigImage/BImage';

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
      <h1>
       Local orineted Designs
      </h1>
      <Row >
       <BImage/>
      </Row>

      <h1>
       other popular demands
      </h1>
      <Row>
      <Card/>
      <Card/>
      <Card/>
      </Row>

      </Container>

      
    </div> );
}
 
export default Home;