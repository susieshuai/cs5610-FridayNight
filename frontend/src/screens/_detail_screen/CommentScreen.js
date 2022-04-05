import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CommentScreen = ({ description }) => {
    console.log('loading comment screen');
    return (
        <>
            <Row className="mt-5" as='p'>
                Comments
            </Row>
            <Row className="mt-5">
                <Col>{description}</Col>
            </Row>
        </>
    )
}

export default CommentScreen