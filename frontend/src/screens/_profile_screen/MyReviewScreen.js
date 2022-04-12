import React, { useEffect } from 'react'
import { Row, Col, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { listMyOrder } from '../../actions/orderAction'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { getUserDetails } from '../../actions/userActions';
import { Link } from 'react-router-dom'
const MyReviewScreen = ({userInfo,user}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy
  console.log(orders)

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
      {loadingOrders ? (
        <Loader />
      ) : errorOrders ? (
        <Message variant='danger'>{errorOrders}</Message>
      ) : (
        <>

          {orders.map((order) => (
            <div className='ms-1' fluid>
              <Row key={order._id} style={{ color: 'grey', fontSize: '14px' }}>
                <Col>
                  <Row>Order Placed {order.createdAt.substring(5, 10)}</Row>  
                </Col>
                <Col>
                  <Row>Total {order.totalPrice}</Row>
                </Col>
                <Col md={{offset:1}}>#{order._id}</Col>
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
      )
      }
    </Col >

  )
}

export default MyReviewScreen