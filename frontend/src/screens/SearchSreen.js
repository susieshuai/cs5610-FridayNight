import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listSearchProducts } from '../actions/productActions'

const SearchScreen = () => {

  const { searchCriteria } = useParams()
  // console.log('search for', searchCriteria);

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  // console.log(productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listSearchProducts(searchCriteria))
  }, [dispatch, searchCriteria])

  return (
    <>
      {
        loading ?
          <Loader /> : error ?
            <Message variant='danger'>{error}</Message> :
            searchCriteria ? (products.length === 0 ?
              <h3>No result found.</h3> : (
                <>
                  <Row className='mt-4 '  >
                    <Col>
                      <Subtitle text='Search Result' />
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
              )) :
              <h3>Please enter search criteria.</h3>
      }
    </>
  )
}

export default SearchScreen