import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listProducts,
  // deleteProduct,
} from '../actions/productActions'


const ProductListScreen = () => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
    
      // dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    // dispatch(createProduct())
  }
  return (
    <>
      <Row>
        <Col>
          {' '}
          <h1>Product list</h1>
        </Col>
        <Col className='text-right'>
          <Button
            className='my-3'
            onClick={createProductHandler}>
            Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>tag</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>

                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        edit
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </>
      )}
    </>
  )
}

export default ProductListScreen
