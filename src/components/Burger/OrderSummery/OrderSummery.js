import React from 'react'
import Frag from '../../../hoc/Frag'

const orderSummery = props => {
  const ingredinetSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>)
    });

  return (
    <Frag>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredinetSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Frag>
  )
}

export default orderSummery;