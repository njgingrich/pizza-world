import React, { useState } from 'react'
import { Formik } from 'formik';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

const ORDER_STAGE = {
  BASE: 0,
  MEATS: 1,
  VEGETABLES: 2,
  FINALIZE: 3,
}

const initialValues = {
  size: 'large',
  sauce: 'marinara',
  sauce_amount: 'regular',
  cheese_amount: 'regular',
  toppings: [],
}

export default function OrderForm() {
  const [currentStage, setCurrentStage] = useState(ORDER_STAGE.BASE)

  function onSubmit() {

  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <RadioButtonGroup id="size" label="Crust">
            <RadioButton name="size" id="size_small" label="Small" value="small" />
            <RadioButton name="size" id="size_medium" label="Medium" value="medium" />
            <RadioButton name="size" id="size_large" label="Large" value="large" />
          </RadioButtonGroup>
          
          <RadioButtonGroup id="sauce" label="Sauce">
            <RadioButton name="sauce" id="sauce_marinara" label="Marinara Sauce" value="marinara" />
            <RadioButton name="sauce" id="sauce_barbecue" label="Barbecue Sauce" value="barbecue" />
          </RadioButtonGroup>

          <RadioButtonGroup id="sauce" label="Sauce Amount">
            <RadioButton name="sauce_amount" id="sauce_amount_none" label="None" value="none" />
            <RadioButton name="sauce_amount" id="sauce_amount_light" label="Light" value="light" />
            <RadioButton name="sauce_amount" id="sauce_amount_regular" label="Regular" value="regular" />
            <RadioButton name="sauce_amount" id="sauce_amount_heavy" label="Heavy" value="heavy" />
          </RadioButtonGroup>

          <fieldset>
            <legend>Cheese</legend>
            <label for="cheese-amount-none">None</label>
            <input id="cheese-amount-none" type="radio" name="cheese_amount" value="none" />

            <label for="cheese-amount-light">Light</label>
            <input id="cheese-amount-light" type="radio" name="cheese_amount" value="light" />

            <label for="cheese-amount-regular">Regular</label>
            <input id="cheese-amount-regular" type="radio" name="cheese_amount" value="regular" />

            <label for="cheese-amount-heavy">Heavy</label>
            <input id="cheese-amount-heavy" type="radio" name="cheese_amount" value="heavy" />
          </fieldset>

          <fieldset>
            <legend>Meat Toppings</legend>

            <label for="topping-pepperoni">Pepperoni</label>
            <input id="topping-pepperoni" type="checkbox" name="topping-pepperoni" />

            <label for="topping-sausage">Sausage</label>
            <input id="topping-sausage" type="checkbox" name="topping-sausage" />

            <label for="topping-ham">Ham</label>
            <input id="topping-ham" type="checkbox" name="topping-ham" />

            <label for="topping-chicken">Grilled Chicken</label>
            <input id="topping-chicken" type="checkbox" name="topping-chicken" />
          </fieldset>
          <fieldset>
            <legend>Veggie Toppings</legend>

            <label for="topping-mushrooms">Mushrooms</label>
            <input id="topping-mushrooms" type="checkbox" name="topping-mushrooms" />

            <label for="topping-onions">Red Onions</label>
            <input id="topping-onions" type="checkbox" name="topping-onions" />

            <label for="topping-black_olives">Black Olives</label>
            <input id="topping-black_olives" type="checkbox" name="topping-black_olives" />

            <label for="topping-banana_peppers">Banana Peppers</label>
            <input id="topping-banana_peppers" type="checkbox" name="topping-banana_peppers" />

            <label for="topping-pineapple">Pineapple</label>
            <input id="topping-pineapple" type="checkbox" name="topping-pineapple" />
          </fieldset>
        </form>
      )}
    </Formik>
  )
}
