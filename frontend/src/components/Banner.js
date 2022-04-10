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
  // console.log(products)
  const screenwidth= (document.documentElement.clientWidth * 668) / 1620 + "px"
  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  window.onresize = () => {
    return (() => {
      if (document.documentElement.clientWidth > 960) {
        screenwidth =
          (document.documentElement.clientWidth * 668) / 1620 + "px";
      }
    })();
  }


  return (
    <>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

        <Carousel pause='hover' >

          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/details/${product._id}`}>
                <div height="screenwidth"><Image src={product.cover} alt={product.name} /></div>

                <Carousel.Caption className='carousel-caption'>
                  <h2>{product.name}</h2>
                  <div dangerouslySetInnerHTML={{ __html: `${product.description}` }} ></div>
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