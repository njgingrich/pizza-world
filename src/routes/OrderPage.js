import React from 'react'
import styled from 'styled-components'

import { ContentPage, theme } from '../styles'
import Pizza from '../components/Pizza';
import OrderForm from '../components/OrderForm';

export default function OrderPage() {
  return (
    <ContentPage>
      <h1>Crust</h1>
      <OrderFormContainer>
        <PizzaContainer>
          <Pizza />
        </PizzaContainer>
        <OrderForm />
      </OrderFormContainer>
    </ContentPage>
  )
}

const OrderFormContainer = styled.section`
  display: grid;
  grid-template-columns: [start] calc(4rem + 400px) [form] auto [end];
  grid-template-rows: auto;
  grid-column-gap: 1rem;

  border: 1px solid ${theme.colors.gray[1]};
`

const PizzaContainer = styled.div`
  margin: 2rem;
`
