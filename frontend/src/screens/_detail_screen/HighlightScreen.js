import React from 'react'
import { Row } from 'react-bootstrap'

const HighlightScreen = ({ highlights }) => {
    return (
        <>
            {/* <Row className="mt-5" as='p'>
                Highlights
            </Row> */}
            <Row className="mt-5">
                <div dangerouslySetInnerHTML={{ __html: `${highlights}` }} />
            </Row>
        </>
    )
}

export default HighlightScreen