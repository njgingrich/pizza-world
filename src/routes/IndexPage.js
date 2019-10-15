import React from 'react'

import DealCard from '../components/Card/DealCard'
import DealGrid from '../components/Grid/DealGrid'

import pizzaImg from '../images/pizza1.jpg'
import { ContentPage } from '../styles'

export default function IndexPage() {
  return (
    <ContentPage>
      <h2>Deals</h2> 
      <DealGrid>
        <DealCard
          image={pizzaImg}
          text="Delivery and pickup deal"
          title="$12.99 Large Pizza"
        />
        <DealCard
          image={pizzaImg}
          text="Get yer pizza here!"
          title="$8 2-Topping"
        />
        <DealCard
          image={pizzaImg}
          text="2 medium 2-topping pizzas with a side of breadsticks, only $12!"
          title="Breadsticks Combo"
        />
      </DealGrid>
    </ContentPage>
  )
}