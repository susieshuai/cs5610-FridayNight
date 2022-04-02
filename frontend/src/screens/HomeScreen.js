import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import Subtitle from '../components/Subtitle'

import { listProducts } from '../actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  // console.log(productList)
  const { loading, error, products } = productList

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])


  return (

    <>
      {loading ? <h1>loading...</h1> : error ? <h3>{error}</h3> : (
        <>
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