import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


const Subtitle = ({ text }) => {
  return (

    <Navbar bg="light" variant='info'>
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="fa-brands fa-battle-net">&nbsp;</i>

          <small>{text}</small>
        </Navbar.Brand>
      </Container>
    </Navbar>

  )
}


export default Subtitle

