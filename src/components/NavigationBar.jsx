import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './NavigationBar.css';
import { FiSearch } from "react-icons/fi";

function NavigationBar(){
    return(
        <div id='navDiv'>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">QuickCart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">MyOrders</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">AboutUs</Nav.Link>

              <div>
                <Nav.Link href="#pricing"> <IoMdLogIn /> LOGIN</Nav.Link>
              </div>

              <div>
                <Nav.Link href="#pricing"><MdOutlineShoppingCart /> CART</Nav.Link>
              </div>

              <div id="searchDiv">
                <FiSearch/>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </div>
              
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavigationBar;