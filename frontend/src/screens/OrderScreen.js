import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Breadcrumb, Row, Col, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment'
import axios from 'axios'

import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderAction';

const OrderScreen = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    // dynamically create PayPal script
    const addPayPalScript = async () => {
      const { data: clientID } = await axios.get('/config/paypal')
      console.log(clientID);
    }
    addPayPalScript()

    if (!userInfo) {
      navigate('/login')
    }
    if (!order || order._id !== id) {
      dispatch(getOrderDetails(id))
    }

  }, [dispatch, navigate, userInfo, order, id])

  return (
    <>
      <Breadcrumb className='mt-2'>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">Your Profile</Breadcrumb.Item>
        <Breadcrumb.Item active>Order Details</Breadcrumb.Item>
      </Breadcrumb>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <>
            <h2>Order Details </h2>
            <Row>
              <Col md={8}>
                <div style={{ color: '	#B0C4DE' }}>
                  <Col>Ordered on {moment(`${order.createdAt}`).format('MMMM Do YYYY')}</Col>
                  <Col>Order#:{order._id}</Col>
                </div>
                Redeem Code will be accepted by:
                <a href={`mailto:${order.user.email}`}>&nbsp;{order.user.email}</a>
                {order.isPaid ? (
                  <Message variant='success'>Payment Time：{order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Your order is unpaid. Pay now and get your Redeem Code!</Message>
                )}
              </Col>
              <Col md={4}>
                PayPal
              </Col>
            </Row>
            <Row className='mt-3'>
              <Table variant='flush' hover responsive >
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Title</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                {order.orderItems.map((item, index) => (

                  <tbody key={index}>
                    <tr>
                      <td style={{ width: '200px' }}>
                        <Image src={item.cover} alt={item.name} fluid rounded />
                      </td>
                      <td>
                        <Link to={`/details/${item.product}`}>{item.name}</Link>
                      </td>
                      <td> {item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.qty * item.price}</td>
                    </tr>
                  </tbody>
                ))}
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Items Price</td>
                    <td>${order.itemsPrice}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Estimated tax rate</td>
                    <td>12%</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Virtual Delivery</td>
                    <td> Free</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total Price</td>
                    <td>${order.totalPrice}</td>
                  </tr>
                </tfoot>
              </Table>
            </Row>
          </>
        )
      }
    </>
  )
}
export default OrderScreen