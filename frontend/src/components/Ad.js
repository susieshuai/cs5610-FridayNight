import React from 'react'
import { Row ,Image} from 'react-bootstrap'
import ad1 from '../ad1.jpg'
import ad2 from '../ad2.jpg'
import ad3 from '../ad3.jpg'
const Ad = () => {
  return (
    <>
      <Row className="mt-5 justify-content-md-center" as='h5' >
        Weekly Ads &amp; Catalogs
      </Row>
      <Image src={ad3} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={ad1} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={ad2} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      
    
    </>
  )
}

export default Ad