import React from 'react'

import { CardContainer } from './styles'
export { CardBody, CardImage, CardFooter } from './styles'

export default function Card({ children }) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}
