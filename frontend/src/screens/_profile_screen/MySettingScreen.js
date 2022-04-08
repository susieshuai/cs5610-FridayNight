import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, ListGroupItem, Nav, Tab, Breadcrumb } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { getUserDetails, updateUserDetails } from "../../actions/userActions";

import { useNavigate } from 'react-router-dom';





const MySettingScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {

        dispatch(getUserDetails('profile'))

      } else {
        setUsername(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUserDetails({ id: user._id, username, email, password }))
  }


  return (
    <>
      {success && <Message variant='success'>Update Success！</Message>}
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={{ span: 4 }}>
            <Form.Group controlId='username'>
              <small> <Form.Label as='b'>About me</Form.Label></small>
              <Form.Control
                className='mt-2 mb-4'
                type='username'
                placeholder='the number of characters is 2 to 12'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size='sm'
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Group controlId='email'>
              <small> <Form.Label as='b'>Email Address</Form.Label></small>
              <Form.Control
                className='mt-2 mb-5'
                type='email'
                placeholder='please enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size='sm'
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col md={10}>
            <Form.Group controlId='password'>
              <small><Form.Label as='b'>Password</Form.Label></small>
              <Form.Control
                className='mt-2 mb-4'
                type='password'
                placeholder='please enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size='sm'
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <small> <Form.Label as='b'>Confirm Password:</Form.Label></small>
              <Form.Control
                className='mt-2 mb-4'
                type='password'
                placeholder='please confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size='sm'
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Button type='button' variant='secondary' style={{ width: '18rem' }}>
                Cancel
              </Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Button type='submit' variant='danger' style={{ width: '19rem' }}>
                Save
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>

    </>
  )
}

export default MySettingScreen