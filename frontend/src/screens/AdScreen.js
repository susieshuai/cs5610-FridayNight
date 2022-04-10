import React from 'react'
import Ad from '../components/Ad'
import { Link } from 'react-router-dom'
const AdScreen = () => {
  return (
    <>
    <Link className='btn btn-secondary my-5' to='/'>
        Back to Home
      </Link>
    <Ad/>
    </>
  )
}

export default AdScreen