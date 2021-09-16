import React from 'react'
import CartWidget from './NavBar/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">aMAR </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Dónde estamos?</Nav.Link>
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Tartas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Tortas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Pattiserie</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Alfajores</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Cookies</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">Budines</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7">Bombones</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8">Macarons</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
