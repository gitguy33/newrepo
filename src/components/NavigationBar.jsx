import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './NavigationBar.css';
import { FiSearch } from "react-icons/fi";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavigationBar(){

  const [showSearch, setShowSearch] = useState(false);
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (!showSearch) {
      // Show the search input
      setShowSearch(true);
    } else {
      // Trigger search (submit)
      console.log('Submitting search:');
    }
  };

  return(
    <div id='navDiv'>
      <Navbar data-bs-theme="light" id='navBar'>
        <Container>
          <Navbar.Brand href="#home">QuickCart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">My Orders</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Foot Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Furniture</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All Categories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">AboutUs</Nav.Link>

            <div className='vcenter'>
              <Nav.Link href="#pricing"><IoMdLogIn />LOGIN</Nav.Link>
            </div>

            <div className='vcenter'>
              <Nav.Link href="#pricing"><MdOutlineShoppingCart />CART</Nav.Link>
            </div>

            <div className='vcenter'>
              {showSearch && (
                <Form className="d-flex" onSubmit={handleSearchClick}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              )}
              <FiSearch onClick={handleSearchClick} />
            </div>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;