import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { userDetails } from "../actions/userActions";

import { useNavigate } from 'react-router-dom';
// import { createBrowserHistory } from "history";

const ProfileScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)


  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  // const history = createBrowserHistory();
  // const redirect = history.location.search ? history.location.search.split('=')[1] : '/'

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate('/login')
  //   } else {
  //     if (!user.username) {
  //       dispatch(userDetails('profile'))
  //     } else {
  //       setUsername(user.username)
  //       setEmail(user.email)
  //     }
  //   }
  // }, [navigate, userInfo, user])

  //update info of user
  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <Row>
      <Col md={3}>
        <h3>Create Your Account</h3>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='username'
              placeholder='the number of characters is 2 to 12'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <br />
            <Button type='submit' variant='primary' style={{ width: '10rem' }}>
              Get Started
            </Button>
          </Form.Group>
        </Form>
      </Col>
      <Col md={9}>
      </Col>
    </Row>
  )
}

export default ProfileScreen