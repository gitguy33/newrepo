import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './images/BG.jpg'; // Make sure to import your image correctly
import { useState } from 'react';
import cloth from "./images/cloth image.jpg";
import electronics from "./images/electronics image.jpg";
import foot from "./images/footwear image.jpg";
import furniture from "./images/furniture image.jpg";


function CarouselSection(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={ExampleCarouselImage }
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={cloth}
            alt="Second slide"
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={electronics}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={foot}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={furniture}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>

        
        

        </Carousel>
    );
}
export default CarouselSection;