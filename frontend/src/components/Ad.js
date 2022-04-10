import React from 'react'
import { Row ,Image} from 'react-bootstrap'

const Ad = () => {
  return (
    <>
      <Row className="mt-2 justify-content-md-center" as='h5' >
        Weekly Ads &amp; Catalogs
      </Row>
      <Image src={'/images/ad3.jpg'} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={'/images/ad1.jpg'} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      <Image src={'/images/ad2.jpg'} className='mt-2' style={{width:'100%',borderRadius:'50px'}}/>
      
    
    </>
  )
}

export default Ad