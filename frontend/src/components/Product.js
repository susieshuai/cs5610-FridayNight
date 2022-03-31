import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 py-3 rounded' style={{ width: '23rem' }}>
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='h6'>{product.name}</Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating value={product.rating} text={` ${product.numReviews} views`} as='h6' />
          </Card.Text>
          <Card.Text as='h4'>${product.price}</Card.Text>

        </Card.Body>
      </Card>
    </>

  )
}

export default Product