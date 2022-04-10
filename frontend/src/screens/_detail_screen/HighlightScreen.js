import React from 'react'
import { Row} from 'react-bootstrap'

const HighlightScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5" as='p'>
                Highlights
            </Row>
            <Row className="mt-5">
            <div dangerouslySetInnerHTML={{ __html: `${description}` }} ></div>
            </Row>
           
        </>
    )
}

export default HighlightScreen