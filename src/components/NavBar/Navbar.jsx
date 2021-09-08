import React from 'react'

function Navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">MAR - Indumentaria</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Inicio</Nav.Link>
      <Nav.Link href="#action2">Zapatillas</Nav.Link>
      <NavDropdown title="Ropa" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Buzos</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Jeans</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Buscar"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
};

Navbar();

export default Navbar

