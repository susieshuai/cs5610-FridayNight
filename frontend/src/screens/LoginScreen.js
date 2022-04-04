import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
     
          <h3>Welcome Back</h3>
          <Form >
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
            <Form.Group>
              <br />
              <Button type='submit' variant='primary'>
                Confirm
              </Button>
            </Form.Group>
          </Form>
          <Row className='py-3'>
            <Col>
              Don't have an account?
              <Link to='/register'>
                Create One!
              </Link>
            </Col>
          </Row>
    </FormContainer>
  )
}

export default LoginScreen