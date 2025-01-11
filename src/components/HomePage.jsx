import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import FooterSection from './FooterSection';
import CarouselSection from './CarouselSection';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("any");
  const [searchItem, setSearchItem] = useState('');


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

  return (
    <div id='mainDiv'>
      
      {/* ------------NavBar--------- */}
      <NavigationBar ncategory={category} setNcategory={setCategory} setSearchItem={setSearchItem}/>
      {/* ------------NavBar--------- */}

      {/* Carousel */}
      <CarouselSection/>
      {/* Carousel */}

      <Container id='prodContainer'>
        <Row>
          {products
            .filter((a) => {
              if(category=="search"){
                return (!a.images[0].startsWith('[') && a.title.toLowerCase().includes(searchItem.toLowerCase()));
              } else if(category!="any"){
                return (!a.images[0].startsWith('[') && a.category.name==category);  // Exclude if it starts with '['
              } else  {
                return !a.images[0].startsWith('[');
              }
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

{/* ------Footer-------- */}
      <FooterSection/>
{/* ------Footer-------- */}

    </div>
  );
};
