import CartWidget from './NavBar/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import "./NavBar/NavBar.css"


const NavBar = () => {


    return (
        <div>
            <Navbar className="navbar flex-column justify-content-center p-0 shadow-lg border-bottom border-white border-2" variant="dark" expand="lg">
                <Container className="p-0 text-light">
                        <Link exact to="/">
                            <Navbar.Brand className=" navbar col-4 col-md-2 d-flex justify-content-center ms-4 text-decoration-none" href="#home">aMAR </Navbar.Brand>
                        </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-secondary bg-primary me-3" />
                    <Navbar.Collapse id="basic-navbar-nav col-2">
                        <Nav className="me-auto">
                            <Link exact to="/">
                                <Nav.Link href="#home" className="text-decoration-none">Inicio</Nav.Link>
                            </Link>
                            <Nav.Link className="navbar">Dónde estamos?</Nav.Link>
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <Link to="/categoria/tartas">
                                        <NavDropdown.Item href="#action/3.1">Tartas</NavDropdown.Item>
                                    </Link>
                                    <Link to="/categoria/tortas">
                                        <NavDropdown.Item href="#action/3.2">Tortas</NavDropdown.Item>
                                    </Link>
                                    <Link to="/categoria/pattiserie">
                                    <NavDropdown.Item href="#action/3.3">Pattiserie</NavDropdown.Item>
                                    </Link>
                                    <Link to="/categoria/alfajores">
                                    <NavDropdown.Item href="#action/3.4">Alfajores</NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Item href="#action/3.5">Cookies</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">Budines</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7">Bombones</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8">Macarons</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <Link to={"/cart"}>
                                    <CartWidget/>
                                </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
