import React from 'react';
import { Carousel } from 'react-bootstrap';
import images1  from '../../Assets/SliderImages/1.jpg'
import images2  from '../../Assets/SliderImages/2.jpg'
import images3  from '../../Assets/SliderImages/3.jpg'
const CarouselBar =()=> {
    return(
        <div>
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Best sofa</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>comfort at its best</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={images3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>soft like feathers</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
        </div>
    );
}

export default CarouselBar; 
