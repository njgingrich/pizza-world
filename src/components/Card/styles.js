import styled from 'styled-components'
import { theme } from '../../styles'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${theme.colors.gray[4]};
  border-radius: 4px;
`

const CardImage = styled.img``

const CardBody = styled.div`
  padding: 1rem;
`

const CardFooter = styled.div`
  padding: 0 1rem 1rem 1rem;
  margin-top: auto;
`

export { CardBody, CardContainer, CardFooter, CardImage }
