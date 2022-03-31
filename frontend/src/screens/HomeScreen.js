import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import Subtitle from '../components/Subtitle'

import products from '../products'
import axios from 'axios'
const HomeScreen = () => {

  return (
    <>
      <Row className='mt-4'  >
        <Col>
          <Subtitle text='Featured &amp; Recommended' />
        </Col>
      </Row>
      <Row className="mx-5" >
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