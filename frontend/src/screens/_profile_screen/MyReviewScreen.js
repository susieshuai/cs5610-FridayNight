import React, { useEffect } from 'react'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Message from '../../components/Message'
import { getUserDetails } from '../../actions/userActions';
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating';
import { myReviewsList } from '../../actions/reviewActions';
const MyReviewScreen = ({user, userInfo}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const myReviews = useSelector((state) => state.myReviews)
  const { reviews } = myReviews


  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(myReviewsList())
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <Col md={9}>
      {reviews ? (reviews.length === 0 ? (
        <Message variant='dark'>
          <h4 style={{ color: '	#B0C4DE' }}>You have never write a review for product</h4>
          <small style={{ color: '	#C0C0C0' }}>Check out your orders!</small>
          <div>
            <Button
              style={{
                width: '350px',
                margin: 'auto',
              }}
              className='bg-success mt-4'
              onClick={refreshPage}

            >Go to Your Order History
            </Button>
          </div>
        </Message>
      ) : (
        <>
          {reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <small>
                <Row>
                  <Col style={{ color: '#B0C4DE', fontSize: '17px' }}><i className="fa-solid fa-user-astronaut" /> {review.username}</Col>
                  <Col md={{ offset: 10 }} style={{ color: 'grey' }}>POSTED: {review.createdAt.substring(0, 10)}</Col>
                </Row>
                <Rating value={review.rating} /></small>

              <p className='mt-4'>{review.review}</p>
            </ListGroup.Item>
          ))
          }
        </>
      )) : (<Message>No Reviews in db.</Message>)
      }

    </Col >

  )
}

export default MyReviewScreen