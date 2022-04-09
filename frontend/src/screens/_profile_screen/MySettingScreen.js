import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { getUserDetails, updateUserDetails } from "../../actions/userActions";

import { useNavigate } from 'react-router-dom';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'





const MySettingScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
      if (!user.name ) {
        // dispatch({ type: USER_UPDATE_PROFILE_RESET })
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
    window.setTimeout(function () {
      window.location.reload(false);
},1000)
  }

  const refreshPage = () => {

    window.location.reload(false);
  }

  return (
    <>
      {success && <Message variant='success' >Update Success！</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={{ span: 5 }}>
            <Form.Group controlId='username'>
              <small> <Form.Label as='b'>About me</Form.Label></small>
              <Form.Control
                className='mt-2 mb-4'
                type='username'
                placeholder='the number of characters is 2 to 12'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <Form.Group controlId='email'>
              <small> <Form.Label as='b'>Email Address</Form.Label></small>
              <Form.Control
                className='mt-2 mb-5'
                type='email'
                placeholder='please enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col md={12}>
            <Form.Group controlId='password'>
              <small><Form.Label as='b'>Password</Form.Label></small>
              <Form.Control
                className='mt-2 mb-4'
                type='password'
                placeholder='please enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
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
               
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <Form.Group>
              <Button
                type='button'
                variant='secondary'
                style={{ width: '28rem' }}
                onClick={refreshPage}>
                Cancel
              </Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Button type='submit' variant='danger' style={{ width: '30rem' }}>
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