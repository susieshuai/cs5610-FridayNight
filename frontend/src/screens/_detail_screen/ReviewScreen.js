import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ReviewScreen = ({ description }) => {
    console.log('loading review screen');
    return (
        <>
            <Row className="mt-5" as='p'>
                Reviews
            </Row>
            <Row className="mt-5">
                <Col>{description}</Col>
            </Row>
        </>
    )
}

export default ReviewScreen