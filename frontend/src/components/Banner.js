import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
const Banner = ({ top1, top2, top3 }) => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={top1.cover}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p>{top1.name}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={top2.cover}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3></h3>
        <p>{top2.name}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={top3.cover}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3></h3>
        <p>{top3.name}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Banner