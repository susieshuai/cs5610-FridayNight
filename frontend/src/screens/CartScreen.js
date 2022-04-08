import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from "../actions/cartActions";
import { createBrowserHistory } from "history";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
  Table
} from 'react-bootstrap'

import Message from '../components/Message'
import cartIcon from '../cart.png'


const CartScreen = () => {
  const history = createBrowserHistory();

  const { id } = useParams()
  const qty = history.location.search ? Number(history.location.search.split('=')[1]) : 1
  // console.log(history.location);
  // console.log(qty);
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  //  console.log(cart);
  const { cartItems } = cart


  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removerFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const navigate = useNavigate()
  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return (
    <Row>
      {cartItems.length === 0 ? (
        <Message variant='light'>
          <br className='mt-4' />
          <br className='mt-4' />
          <br className='mt-4' />
          <h2 >Your Cart is Empty</h2>
          <small>Check out what we're featuring now!</small><br /><br />
          <Link to='/'><Button
            style={{
              width: '350px',
              display: 'block',
              margin: 'auto',
            }}

          >Go to Homepage</Button></Link><br />
          <Image src={cartIcon}
            alt='cartIcon'
            style={{
              width: '250px',
              display: 'block',
              margin: 'auto',
            }}

            fluid rounded />
        </Message>
      ) : (
        <>
          <Col md={8}>
            <h5>Shopping Cart</h5>
            <b style={{
              fontSize: '15px',
              color: 'grey',
            }}
            >${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} subtotal
              · {cartItems.reduce((acc, item) => acc + item.qty, 0)} items</b>
            <ListGroup variant='flush' className='mt-2'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      marginLeft: '700px'
                    }}>
                    Each Price</Row>
                  <Row >
                    <Col md={3}>
                      <Image src={item.cover} alt={item.name} fluid rounded
                        style={{
                          width: '80px',

                        }} />
                    </Col>
                    <Col xs={{ span: 4 }}>
                      <Row><small><Link to={`/products/${item.product}`}>{item.name}</Link></small></Row>
                      <Row>
                        <br></br>

                        <Col xs={1} className='mt-2'><h6>Qty.</h6></Col>
                        <Col xs={3}>
                          <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                            size='sm'
                          >
                            {[...Array(item.countInStock).keys()].map((i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </Form.Control>

                        </Col>
                      </Row>
                    </Col>
                    <Col md={{ span: 1, offset: 3 }}><small>
                      ${item.price}
                    </small></Col>
                    <Col>
                      <Button
                        type='button'
                        onClick={() => removerFromCartHandler(item.product)}
                        variant="light"
                        size='sm'
                      >
                        <i className="fa-solid fa-trash-can" ></i>
                      </Button>
                    </Col>
                  </Row>


                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>

            <h5>Order summary</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Table striped bordered hover>
                    <thead>
                    </thead>
                    <tbody>
                      <tr style={{ color: 'red', fontSize: '15px' }}>
                        <td>Subtotal
                          ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</td>
                        <td> ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</td>
                      </tr>
                      <tr style={{ fontSize: '15px' }}>
                        <td >Delivery</td>
                        <td style={{ color: 'red' }}> Free</td>
                      </tr>
                      <tr style={{ fontSize: '15px' }}>
                        <td>Estimated tax rate</td>
                        <td> 12%</td>
                      </tr>
                      <tr>
                        <td><b>Total</b></td>
                        <td><b>${cartItems.reduce((acc, item) => (acc + item.qty * item.price) * 1.12, 0).toFixed(2)}</b></td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    style={{
                      width: '350px',
                      display: 'block',
                      margin: 'auto',
                    }}
                    onClick={checkoutHandler}
                  >
                    Proceed to checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </>
      )}
    </Row>
  )
}

export default CartScreen