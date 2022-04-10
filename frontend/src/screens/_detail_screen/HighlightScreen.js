import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HighlightScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5" as='p'>
                Highlights
            </Row>
            <Row className="mt-5">
                <Col>{description}</Col>
            </Row>
           
        </>
    )
}

export default HighlightScreen