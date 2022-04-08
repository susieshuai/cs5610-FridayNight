import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DescriptionScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5" as='p'>
                Description
            </Row>
            <Row className="mt-5">
                <Col>{description}</Col>
            </Row>
        </>
    )
}

export default DescriptionScreen