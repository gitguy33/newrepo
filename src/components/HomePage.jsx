import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
=======
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import FooterSection from './FooterSection';
import CarouselSection from './CarouselSection';
import SpinnerIc from './SpinnerIc';
import NoResults from "./images/noResults.png";
import CardPop from './CardPopUp';
import { Modal } from 'react-bootstrap';


>>>>>>> 223b2467bd5257c9fe6ca2c24549d68f2fb31a51

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("any");
  const [searchItem, setSearchItem] = useState('');
  const [loading,  setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct]=useState();
  const [showModal, setShowModal]=useState(false);

  let filteredp=[];

  const handleClickCard=(b)=>{
    setSelectedProduct(b);
    setShowModal(true);
  }

  useEffect(() => {
    const fetchPros = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data);
      } catch (error) {
        alert("error occurred!!");
      } finally{
        setLoading(false);
      }
    }
    fetchPros();
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">QuickCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <div style={{ marginLeft: "50px" }}>
                <Nav.Link as={Link} to="/Order">
                  My Orders
                </Nav.Link>
              </div>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">AboutUs</Nav.Link>
=======
    <div id='mainDiv' style={{backgroundColor:"rgb(240, 240, 240)"}}>
      
      {/* ------------NavBar--------- */}
      <NavigationBar category={category} setCategory={setCategory} setSearchItem={setSearchItem}/>
      {/* ------------NavBar--------- */}
>>>>>>> 223b2467bd5257c9fe6ca2c24549d68f2fb31a51

      {/* Carousel */}
      <CarouselSection/>
      {/* Carousel */}

      {loading?(<SpinnerIc/>):(
      <Container id='prodContainer'>
        <Row>
          {filteredp=products
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
                <Card style={{ width: '18rem', gap: "20px", marginTop: "35px", backgroundColor:"#A5A5A5"}} onClick={()=>handleClickCard(a)}>
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
            {filteredp.length>0?(<></>):(<div id='noresultimg'><img src={NoResults}/><h1>Oops!!! No Products Found</h1></div>)}
        </Row>
      </Container>
      )}

      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <CardPop a={selectedProduct}/>
      </Modal>

      {/* ------Footer-------- */}
      <FooterSection/>
      {/* ------Footer-------- */}

    </div>
  );
};


