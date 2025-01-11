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

function NavigationBar({ncategory,setNcategory,setSearchItem}){

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (!showSearch) {
      // Show the search input
      setShowSearch(true);
      
    } else {

    }
  };

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    setNcategory("search");
    // Trigger search (submit)
    console.log('Submitting search:',e.target.searchInp.value);
    setSearchItem(e.target.searchInp.value);
  }
  const handleCategoryChange = (e)=>{
    console.log(e.target.name);
    setNcategory(e.target.name);
  }

  return(
    <div id='navDiv'>
      <Navbar data-bs-theme="light" id='navBar'>
        <Container>
          <Navbar.Brand href="/">QuickCart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">My Orders</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleCategoryChange} name="Clothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCategoryChange} name="Shoes">Foot Wear</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCategoryChange} name="Electronicsnnnn">Electronics</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCategoryChange} name="Furniture">Furniture</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleCategoryChange} name="any">All Categories</NavDropdown.Item>
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
                <Form className="d-flex" onSubmit={handleSearchSubmit}>
                  <Form.Control
                    name='searchInp'
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