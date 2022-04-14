import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardGroup } from 'react-bootstrap'
import Rating from './Rating'
import { listReviews } from '../actions/reviewActions'

const Review = () => {

  const dispatch = useDispatch()
  const reviewList = useSelector((state) => state.reviewList)
  const { reviews } = reviewList

  useEffect(() => {
    dispatch(listReviews())
  }, [dispatch])


  return (
    <>
      <CardGroup >
        {reviews.map((review) => (
          <Card bg="dark" key={review._id}>
            <Card.Body>
              <Row >
                <Col style={{ color: '#B0C4DE', fontSize: '12px' }}>
                  <div><i className="fa-solid fa-user-astronaut" /> {review.user.username}</div>
                  {review.createdAt.substring(0, 10)}
                  <Rating value={review.rating} />
                </Col>
                <Col md={{offset:4}} xs={{offset:4}}><Link to={`/details/${review.product._id}`}>{review.product.name}</Link></Col>
              </Row>
              <p style={{ color: 'silver', fontSize: '14px' }}>{review.review.substring(0, 200) + '...'}</p>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  )
}

export default Review