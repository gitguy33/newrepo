import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './BG.jpg'; // Make sure to import your image correctly
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import FooterSection from './FooterSection';

export const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPros = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data);
      } catch (error) {
        alert("error occurred!!");
      }
    }
    fetchPros();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='mainDiv'>
      
      {/* ------------NavBar--------- */}
      <NavigationBar/>
      {/* ------------NavBar--------- */}

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

      <Container id='prodContainer'>
        <Row>
          {products
            .filter((a) => {
              return !a.images[0].startsWith('[');  // Exclude if it starts with '['
            })
            .map((a) => (
              <Col sm={4} key={a.id}>
                <Card style={{ width: '18rem', gap: "20px", marginTop: "35px" }}>
                  <Card.Img variant="top" src={a.images} width="100" style={{ width: "200px", height: "150px", paddingLeft: "90px" }} />
                  <Card.Body>
                    <Card.Title>{a.title}</Card.Title>
                    <Card.Text>
                      ${a.price}.00
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

      <FooterSection/>

    </div>
  );
};
