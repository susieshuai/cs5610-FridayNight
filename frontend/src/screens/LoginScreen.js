import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { login } from "../actions/userActions";
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from "history";

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = createBrowserHistory();
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const redirect = history.location.search ? history.location.search.split('=')[1] : '/'
  console.log(redirect)

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <FormContainer>
        <h3>Welcome Back</h3>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email' >
            <Form.Label className='mt-2'>Email Address</Form.Label>
            <Form.Control

              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label className='mt-2'>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <br />
            <Button type='submit' variant='primary' style={{ width: '10rem' }} className='mt-3'>
              Go Ahead
            </Button>
          </Form.Group>
        </Form>
        <Row className='py-3'>
          <Col>
            Don't have an account?
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Create One!
            </Link>
          </Col>
        </Row>
      </FormContainer>

    </>

  )
}

export default LoginScreen