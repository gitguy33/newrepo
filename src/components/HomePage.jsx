import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './BG.jpg'; // Make sure to import your image correctly
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartImage from './cart.jpg'; // Import your cart image
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

export const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">QuickCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">MyOrders</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">AboutUs</Nav.Link>

            <div name="search" style={{marginLeft:"200px"}}>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>

            </Form>
            </div>

            <div style={{marginLeft:"200px"}}>
              
              <Nav.Link href="#pricing"> <IoMdLogIn /> LOGIN</Nav.Link>
            
            </div>

            <div style={{marginLeft:"50px"}}>
              <Nav.Link href="#pricing"><MdOutlineShoppingCart /> CART</Nav.Link>  
            </div>
          </Nav>
        </Container>
      </Navbar>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
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
            src={ExampleCarouselImage}
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
            src={ExampleCarouselImage}
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
            src={ExampleCarouselImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
