import React from 'react'
import { Row } from 'react-bootstrap'

const HighlightScreen = ({ highlights }) => {
    return (
        <>
            {/* <Row className="mt-5">
                Highlights
            </Row> */}
            <Row className="mt-5">
                <div dangerouslySetInnerHTML={{ __html: `${highlights}` }} ></div>
            </Row>

        </>
    )
}

export default HighlightScreen