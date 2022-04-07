import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      // style={{
      //   width: '100px',
      //   height: '100px',
      //   marginLeft:'580px',
      //   marginTop: '200px',
      //   display: 'block',
      // }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader