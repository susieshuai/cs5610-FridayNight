import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, ListGroup, Form, Button, Col } from 'react-bootstrap'
import { listProductDetails, addReview } from '../../actions/productActions'
import { ScrollTo } from "react-scroll-to";
import Rating from '../../components/Rating'
import Message from '../../components/Message'

const ReviewScreen = ({ reviews }) => {
    const { id: productId } = useParams()
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')

    const dispatch = useDispatch()
    const productAddReview = useSelector(state => state.productAddReview)
    const { success, error } = productAddReview

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (success) {
            setRating(0)
            setReview('')
        }
        dispatch(
            listProductDetails(productId)
        )
    }, [dispatch, success])

    const submitReview = (e) => {
        e.preventDefault()
        dispatch(
            addReview(productId, { rating, review })
        )
    }



    return (
        <>
            {/* ROW 1 : title */}
            <Row className="mt-5" as='p'>
                <Col>Guest Ratings &amp; Reviews</Col>

            </Row>
            {/* ROW 2 : review list */}
            <Row>
                {reviews ? (reviews.length === 0 ? (<Message>No Reviews.</Message>) : (
                    <><ScrollTo>
                        {({ scroll }) => (
                            <Button
                                className='bg-info mb-4'
                                style={{ width:'25em',fontSize: '8px' }}

                                onClick={() => scroll({ x: 20, y: 10000 })}
                            >Write a Review</Button>)}
                    </ScrollTo><ListGroup variant='flush'>
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
                            ))}
                        </ListGroup>
                    </>)) : (<Message>No Reviews.</Message>)
                }
            </Row>

            {/* ROW 3 :  add new review title*/}
            <Row className="mt-5" as='p'>
                New Review
            </Row>

            {/* ROW 4 :  form*/}
            <Row>
                {userInfo ? (
                    <Form onSubmit={submitReview} >
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
                                onChange={(e) => setReview(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        {/* submit button */}
                        <Button type='submit' className='mt-5 bg-info'>
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