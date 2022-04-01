import React, { useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import Subtitle from '../components/Subtitle'

import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/products')
      setProducts(data)
    }
    fetchProducts()
  },[products.length])

  return (
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
  )
}

export default HomeScreen