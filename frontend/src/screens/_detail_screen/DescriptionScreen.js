import React from 'react'
import { Row} from 'react-bootstrap'
import Ad from '../../components/Ad'

const DescriptionScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5" as='p'>
                Description
            </Row>
            <Row className="mt-3">
            <div dangerouslySetInnerHTML={{ __html: `${description}` }} ></div>
            </Row>  
            <Ad/>
        </>
    )
}

export default DescriptionScreen