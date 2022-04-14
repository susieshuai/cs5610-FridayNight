import React from 'react'
import { Row} from 'react-bootstrap'
import Ad from '../../components/Ad'

const DescriptionScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5">
                Description
            </Row>
            <Row className="mt-3">
            <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
            </Row>  
            <Ad/>
        </>
    )
}

export default DescriptionScreen