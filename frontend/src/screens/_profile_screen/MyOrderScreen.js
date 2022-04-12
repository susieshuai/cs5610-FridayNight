import React, { useEffect } from 'react'
import { Row, Col, Image, Table,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { listMyOrder } from '../../actions/orderAction'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { getUserDetails } from '../../actions/userActions';
import { Link } from 'react-router-dom'
const MyorderScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrder())
      }
    }
  }, [dispatch, navigate, userInfo, user])

  return (
    <Col md={9}>
      {errorOrders && <Message variant='danger'>{errorOrders}</Message>}
      {loadingOrders && <Loader />}
      {orders ? (orders.length === 0 ? (
        <Message variant='dark'>
          <h4 style={{ color: '	#B0C4DE' }}>You have never placed an order</h4>
          <small style={{ color: '	#C0C0C0' }}>Check out what we're featuring now!</small>
          <div>
          <Link to='/'><Button
            style={{
              width: '350px',
              margin: 'auto',
            }}
            className='bg-success mt-2'

          >Go to Homepage</Button></Link></div>
        </Message>
      ) : (
        <>
        {orders.map((order) => (
          <div className='ms-1' key={order._id}>
            <Row  style={{ color: 'grey', fontSize: '14px' }}>
              <Col>
                <Row>Order Placed {order.createdAt.substring(5, 10)}</Row>
              </Col>
              <Col>
                <Row>Total {order.totalPrice}</Row>
              </Col>
              <Col md={{ offset: 1 }}>#{order._id}</Col>
              <Col><Link to={`/order/${order._id}`}>View order details</Link></Col>
            </Row>
            {order.orderItems.map((item, index) => (
              <Table key={index}>
                <tbody >
                  <tr>
                    <td style={{ width: '150px' }}>
                      <Image src={item.cover} alt={item.name} fluid rounded />
                    </td>
                    <td>{item.name}</td>
                  </tr>
                </tbody>
              </Table>
            ))}
          </div>
        ))
        }
      </>
      )) : (<Message>No Orders.</Message>)
      }

    </Col >

  )
}

export default MyorderScreen