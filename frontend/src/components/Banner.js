import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const Banner = () => {


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

        <Carousel pause='hover' className='bg-light'>

          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/details/${product._id}`}>
                <Image src={product.cover} alt={product.name} />
                <Carousel.Caption className='carousel-caption'>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}

        </Carousel>
      )
      }
    </>
  )
}

export default Banner