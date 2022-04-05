import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from 'react-router-dom'
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

import DescriptionScreen from "./_detail_screen/DescriptionScreen"
import HighlightScreen from './_detail_screen/HighlightScreen'
import ReviewScreen from './_detail_screen/ReviewScreen'
import CommentScreen from './_detail_screen/CommentScreen'

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

            {/* ABOUT section */}
            <Row className="mt-5 justify-content-md-center" as='h5' >
              About This Game
            </Row>
            <Row className="mt-4" as='h6'>
              <Link to={`/details/${id}/description`}>
                <Col>Description</Col>
              </Link>

              <Link to={`/details/${id}/highlights`}>
                <Col>Highlights</Col>
              </Link>

              <Link to={`/details/${id}/reviews`}>
                <Col>Reviews</Col>
              </Link>

              <Link to={`/details/${id}/comments`}>
                <Col>Comments</Col>
              </Link>
            </Row>
            <Routes>
              {/* description */}
              <Route path={`/details/${id}/description`} element={<DescriptionScreen description={product.description} />} exact />
              {/* hightlight */}
              <Route path={`/details/${id}/highlights`} element={<HighlightScreen description={product.description} />} exact />
              {/* review */}
              <Route path={`/details/${id}/reviews`} element={<ReviewScreen description={product.description} />} exact />
              {/* comment */}
              <Route path={`/details/${id}/comments`} element={<CommentScreen description={product.description} />} exact />

            </Routes>
          </>
        )
      }
    </>
  )
}

export default DetailScreen