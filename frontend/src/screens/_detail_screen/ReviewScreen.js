import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'

import Rating from '../../components/Rating'
import Message from '../../components/Message'

const ReviewScreen = ({ reviews }) => {
    console.log(reviews);
    return (
        <>
            <Row className="mt-5" as='p'>
                Reviews
            </Row>
            {reviews ? (reviews.length === 0 ? (<Message>No comments.</Message>) : (<ListGroup variant='flush'>
                {reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                        <h4>{review.username}</h4>
                        <Rating value={review.rating} />
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.review}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>)) : (<Message>No comments.</Message>)
            }
        </>
    )
}

export default ReviewScreen