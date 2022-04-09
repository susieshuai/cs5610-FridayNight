import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, ListGroup, Form, Button } from 'react-bootstrap'
import { addReview } from '../../actions/productActions'

import Rating from '../../components/Rating'
import Message from '../../components/Message'

const ReviewScreen = ({ reviews }) => {
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')

    const dispatch = useDispatch()
    const productAddReview = useSelector(state => state.productAddReview)
    const { success, error } = productAddReview

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const submitReview = () => {
        console.log('submit review');
    }

    return (
        <>
            {/* ROW 1 : title */}
            <Row className="mt-5" as='p'>
                Reviews
            </Row>

            {/* ROW 2 : review list */}
            <Row>
                {reviews ? (reviews.length === 0 ? (<Message>No Reviews.</Message>) : (<ListGroup variant='flush'>
                    {reviews.map((review) => (
                        <ListGroup.Item key={review._id}>
                            <h4>{review.username}</h4>
                            <Rating value={review.rating} />
                            <p>{review.createdAt.substring(0, 10)}</p>
                            <p>{review.review}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>)) : (<Message>No Reviews.</Message>)
                }
            </Row>

            {/* ROW 3 :  add new review title*/}
            <Row className="mt-5" as='p'>
                New Review
            </Row>

            {/* ROW 4 :  form*/}
            <Row>
                {userInfo ? (
                    <Form onSubmit={submitReview}>
                        {/* rating */}
                        <Form.Group>
                            <Form.Label>Rating:</Form.Label>
                            <Form.Control
                                as='select'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value=''>Please Select</option>
                                <option value='5'>5 - Very Satisfied</option>
                                <option value='4'>4 - Satisfied</option>
                                <option value='3'>3 - Neutral</option>
                                <option value='2'>2 - Unsatisfied</option>
                                <option value='1'>1 - Very Unsatisfied</option>
                            </Form.Control>
                        </Form.Group>

                        {/* review */}
                        <Form.Group className='mt-5'>
                            <Form.Label>Review:</Form.Label>
                            <Form.Control
                                as='textarea'
                                value={review}
                                row='5'
                                onChange={(e) => setRating(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        {/* submit button */}
                        <Button type='submit' className='btn-block mt-5'>
                            Submit
                        </Button>
                    </Form>) : (
                    <Message>Please <Link to='/login'>Login</Link> to add new review.</Message>
                )}
            </Row>
        </>
    )
}

export default ReviewScreen