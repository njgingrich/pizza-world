import React from 'react'
import { Link } from 'react-router-dom'

import Card, { CardImage, CardBody, CardFooter } from '../index'

export default function DealCard({ image, text, title }) {
  return (
    <Card>
      <CardImage src={image} />
      <CardBody>
        <h3>{title}</h3>
        <p>{text}</p>
      </CardBody>
      <CardFooter>
        <Link to="/order">Order Now</Link>
      </CardFooter>
    </Card>
  )
}
