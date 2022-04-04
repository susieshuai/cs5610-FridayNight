import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'

import { useNavigate } from 'react-router-dom';

import {
  Row,
  Col,
  Image,
  Button,
  Form,
  Badge
} from 'react-bootstrap'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const DetailScreen = () => {


  const { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const [qty, setQty] = useState(1)
  // const [rating, setRating] = useState(0)

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [id, dispatch])

  const navigate = useNavigate()
  const addCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  return (
    <>
      <Link className='btn btn-primary my-5' to='/'>
        Back to Home
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <>
            <Row>
              <Col md={7}>
                <Image src={product.cover} alt={product.name} fluid />
              </Col>
              <Col md={4}>

                <Image src={product.cover} alt={product.name} fluid />
                <Col as='h4'>{product.name}</Col>
                <Col>
                  <Badge pill bg="success" as='title'>{product.tag}</Badge>
                  &nbsp;
                  <Badge pill bg="success" as='title'>{product.category}</Badge>
                </Col>
                <big>
                  <Col style={{ color: '#FF0000' }}>${product.price} sale</Col>
                </big>

                <small>
                  <Col>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </Col>

                  <Col style={{ color: '#A9A9A9' }}>{product.countInStock > 0 ? 'in stock' : 'out of stock'}</Col>
                  <p></p>
                  <Col>RELEASE DATE：{product.releasedate}</Col>
                  <Col>DEVELOPER:：{product.developer}</Col>
                  <Col>PUBLISHER：{product.publisher}</Col>

                  <Row className="mt-4">
                    <Col xs={1}>Qty.</Col>
                    <Col xs={2}>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        size='sm'
                      >
                        {[...Array(product.countInStock).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col xs={{ span: 6 }}>
                   
                        <Button
                          onClick={addCartHandler}
                          className='btn-block'
                          type='button'
                          disabled={product.countInStock === 0}
                          size='sm'
                          style={{ width: '18em' }}

                        >
                          Add to Cart
                        </Button>
                   
                    </Col>

                  </Row>
                </small>
              </Col>
            </Row>


            <Row className="mt-5 justify-content-md-center" as='h5' >
              About This Game
            </Row>
            <Row className="mt-4" as='h6' >
              <Col xs={{ span: 1, offset: 4 }}>Description</Col>
              <Col xs={{ span: 1 }}>Highlights</Col>
              <Col xs={{ span: 1 }}>Reviews</Col>
              <Col>Comments</Col>
            </Row>
            <Row className="mt-5" as='p'>
              Description
            </Row>
            <Row className="mt-5">
              <Col>{product.description}</Col>
            </Row>
            <Row className="mt-5" as='p'>
              Highlights
            </Row>
            <Row className="mt-5">
              <Col>{product.description}</Col>
            </Row>
            <Row className="mt-5" as='p'>
              Reviews
            </Row>
            <Row className="mt-5">
              <Col>{product.description}</Col>
            </Row>
            <Row className="mt-5" as='p'>
              Customer Comments
            </Row>
            <Row className="mt-5">
              <Col>{product.description}</Col>
            </Row>
          </>
        )}

    </>
  )
}

export default DetailScreen