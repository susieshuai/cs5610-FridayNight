import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, ListGroupItem, Nav, Tab} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails } from "../actions/userActions";

import { useNavigate } from 'react-router-dom';
import Subtitle from '../components/Subtitle'
import MyReviewScreen from './_profile_screen/MyReviewScreen'
import MySettingScreen from './_profile_screen/MySettingScreen'
import MyOrderScreen from './_profile_screen/MyOrderScreen'
import Meta from '../components/Meta'

const ProfileScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message] = useState(null)


  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

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


  return (
    <>
    <Meta title={`Hello, ${user.name}`}/>
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
              <i className="fa-solid fa-envelope">&nbsp;</i>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}
            </ListGroupItem>
            <ListGroupItem>
              <i className="fa-solid fa-envelope">&nbsp;</i>Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Van
            </ListGroupItem>
          </ListGroup>

          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="orders"><i className="fa-solid fa-box-open">&nbsp;</i>Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviews"><i className="fa-solid fa-star">&nbsp;</i>Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings"><i className="fa-solid fa-gear">&nbsp;</i>Settings</Nav.Link>
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
              <MySettingScreen></MySettingScreen>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default ProfileScreen