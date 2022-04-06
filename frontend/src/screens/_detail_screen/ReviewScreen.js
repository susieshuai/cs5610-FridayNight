import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ReviewScreen = ({ reviews }) => {
    console.log(reviews);
    return (
        <>
            <Row className="mt-5" as='p'>
                Reviews
            </Row>
            <Row className="mt-5">
                <Col>{reviews}</Col>
            </Row>
        </>
    )
}

export default ReviewScreen