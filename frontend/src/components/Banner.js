import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Image, Col } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'


// import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {


  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated
  // console.log(products)
  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Col sm={12} md={10} lg={8} xl={6}>
          <Carousel pause='hover'>
            {products.map((product) => (
              <Carousel.Item key={product._id}>
                <Link to={`/details/${product._id}`}>
                  <Image src={product.cover} alt={product.name} />
                </Link>
                
                  <Carousel.Caption className='carousel-caption'>
                  <div dangerouslySetInnerHTML={{ __html: `${product.description.substring(0, 60)+'...'}` }} ></div>
                    
                  </Carousel.Caption>
              </Carousel.Item>
            ))}

          </Carousel>
        </Col>
      )
      }
    </>
  )
}

export default Banner