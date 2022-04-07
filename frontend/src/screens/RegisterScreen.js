import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [message, setMessage] = useState(null)

  return (
    <FormContainer>
      <h3>Create Your Account</h3>
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='name'
            placeholder='the number of characters is 2 to 12'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='please enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='please enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='please confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <br/>
          <Button type='submit' variant='primary' style={{ width: '10rem' }}>
            Get Started
          </Button>
        </Form.Group>
      </Form>
      <Row className='py-3'>
        <Col>
          Already have an account?
          <Link to='/login'>
            Sign in!
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen