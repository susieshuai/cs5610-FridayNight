import React from 'react'
import { Row ,Image} from 'react-bootstrap'
import ad1 from '../icons/ad1.jpg'
import ad2 from '../icons/ad2.jpg'
import ad3 from '../icons/ad3.jpg'
const Ad = () => {
  return (
    <>
      <Row className="mt-2 justify-content-md-center" as='h5' >
        Weekly Ads &amp; Catalogs
      </Row>
      <Image src={ad3} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={ad1} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={ad2} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      
    
    </>
  )
}

export default Ad