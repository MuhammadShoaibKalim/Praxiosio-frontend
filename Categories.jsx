
import React from 'react';
import { NavItem, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Categories.css'; // Import external CSS file

const Categories = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="dark">
      <Container>
        <Navbar.Brand href="#home" > <h1 > PRAXISIO</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <NavDropdown title="Code" id="collapsible-nav-dropdown" className="dropdown-custom"  style={{ backgroundColor: 'transparent', borderRadius:'10%', color:'white',  }}>
              <NavDropdown.Item href="#action/3.1">Chemicals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Medicines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calculations</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <NavItem>
              <Nav.Link href="" >
                <img src="..\src\pages\img\76877232-floppy-disk-floppy.jpg" alt="User" style={{ width: '48px', height: '48px', borderRadius: '50%', padding:'0',  background:'white'}} />
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="" >
                <img src="..\src\pages\img\person_circle_icon.png" alt="" style={{width: '48px', height: '48px', borderRadius: '50%', background:'white' }} />
              </Nav.Link>
            </NavItem>
            <NavItem >
              <Nav.Link href="#about"  >
                <img src="..\src\pages\img\information-mar.webp" alt="File" style={{ width: '48px', height: '48px', borderRadius: '50%' , background:'white'}} />
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Categories;
