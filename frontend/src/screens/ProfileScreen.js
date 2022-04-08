import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, ListGroupItem, Nav, Tab, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails } from "../actions/userActions";

import { useNavigate } from 'react-router-dom';
import Subtitle from '../components/Subtitle'
import MyReviewScreen from './_profile_screen/MyReviewScreen'
import MySettingScreen from './_profile_screen/MySettingScreen'
import MyOrderScreen from './_profile_screen/MyOrderScreen'

const ProfileScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)


  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  console.log(user)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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

  //update info of user
  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <Tab.Container id="left profile" defaultActiveKey="orders">
      <Row>
        <Col md={3}>
          <Row className='mt-5 mb-5'>
            <h3>Hello, {username}</h3>
          </Row>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <ListGroup>
            <ListGroupItem>
              <i class="fa-solid fa-envelope">&nbsp;</i>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}
            </ListGroupItem>
            <ListGroupItem>
              <i class="fa-solid fa-envelope">&nbsp;</i>Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Van
            </ListGroupItem>
          </ListGroup>

          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="orders"><i class="fa-solid fa-box-open">&nbsp;</i>Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviews"><i class="fa-solid fa-star">&nbsp;</i>Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings"><i class="fa-solid fa-gear">&nbsp;</i>Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="orders">
              <h3><Subtitle text='Orders History ' /></h3>
              <MyOrderScreen />
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
            <h3><Subtitle text='My Reviews ' /></h3>
              <MyReviewScreen />
            </Tab.Pane>
            <Tab.Pane eventKey="settings">
            <h3> <Subtitle text='My Settings ' /></h3>
              <MySettingScreen />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default ProfileScreen