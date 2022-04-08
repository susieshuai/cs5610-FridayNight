import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'

import Banner from '../components/Banner'
import Product from '../components/Product'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {


  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  // console.log(productList)
  const { loading, error, products } = productList

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])

  const top1 = products[3]
  const top2 = products[4]
  const top3 = products[7]
  return (

    <>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <>
            <Row className="justify-content-md-center mt-3 mx-5" >
              <Col xl={7}>
              <Banner top1={top1} top2={top2} top3={top3}/>
              </Col>
            </Row>
            <Row className='mt-1' >
              <Col md={{ span: 5 }}>
                <Subtitle text=' Customer Reviews' />
              </Col>
            </Row>
            <Row className='mt-1' >
              <Col>
                <Card>find the lastest reviews 4 or 5, replace it in each col</Card>
              </Col>
            </Row>
            <Row className='mt-4 '  >
              <Col>
                <Subtitle text='Featured &amp; Recommended' />
              </Col>
            </Row>
            <Row className="mx-5 " >
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}

    </>
  )
}

export default HomeScreen