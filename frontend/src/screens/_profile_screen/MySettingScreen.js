import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, ListGroupItem, Nav, Tab, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'



import { useNavigate } from 'react-router-dom';




const MySettingScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
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
    </>
  )
}

export default MySettingScreen