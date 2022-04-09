import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  Button,
  Form,
  Badge,
} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listTopProducts } from '../actions/productActions'

const TopProductScreen = () => {

  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated
  console.log(products)

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])


  return (
    <>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <>
          {products.map((product) => (
            <Row className='mt-2'>
              <Col md={4}>
                <Link to={`/details/${product._id}`}>
                  <Image src={product.cover} alt={product.name} fluid />
                </Link>
              </Col>
              <Col md={4}>
                <Link to={`/details/${product._id}`} style={{textDecoration:'none', color:'#FFEBCD'}}> 
                  <Col as='h4'>{product.name}</Col>
                </Link>
                <Col>
                  <Badge pill bg="success" as='title'>{product.tag}</Badge>
                  &nbsp;
                  <Badge pill bg="success" as='title'>{product.category}</Badge>
                </Col>
                <small>
                  <br />
                  <small>
                    <Col>RELEASE DATE：{product.releasedate}</Col>
                    <Col>DEVELOPER:：{product.developer}</Col>
                    <Col>PUBLISHER：{product.publisher}</Col></small>
                </small>
              </Col>
              <Col style={{fontSize:'15px', color:'smokewhite'}}>{product.description}
              </Col>
            </Row>

          ))}
        </>
      )
      }
    </>
  )
}

export default TopProductScreen