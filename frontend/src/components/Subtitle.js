import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


const Subtitle = ({ text }) => {
  return (

    <Navbar bg="" variant='success'>
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

