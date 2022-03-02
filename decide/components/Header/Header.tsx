import React from 'react'
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Stack} from 'react-bootstrap'


function Header() {
  return (
    <Navbar bg="dark" expand={false} variant="dark" fixed="top">
  <Container fluid>
    <Navbar.Brand href="#">Decide</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Decide</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="dark">Search</Button>
        </Form>
        <Stack gap={5}><div></div><div></div></Stack>

        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Decision made</Nav.Link>
          <Nav.Link href="#action2">Still deciding</Nav.Link>
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}

export default Header