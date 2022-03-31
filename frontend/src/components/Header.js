import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (

    <header>
      <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <i className='fas fa-gamepad fa-lg'>&nbsp;</i>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to='/home'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products'>
                <Nav.Link>Deals</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products/new'>
                <Nav.Link>What's new</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Categories" id="navbarDropdown">
                <NavDropdown.Item href="#action3">Pending realization</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Pending realization</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mx-auto ">
              <FormControl
                className='input'
                type="search"
                placeholder="search"
                size='sm'
                aria-label="Search"
              />
              <Button variant="primary" size='sm' >
                <i className='fa fa-magnifying-glass'></i>
              </Button>
            </Form>
            <Nav className='ms-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className="fa-solid fa-user-astronaut">&nbsp;</i>
                  {/* <i className='fa fa-user fa-sm'>&nbsp;</i> */}
                  Sign in
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart fa-sm'></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >

  )
}

export default Header
