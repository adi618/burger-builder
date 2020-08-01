import React, { Fragment } from 'react';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ing => (
      <li key={ing}>
        <span style={{ textTransform: 'capitalize' }}>{ing}</span>: {props.ingredients[ing]}
      </li>)
      );

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Selected ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Checkout</p>
    </Fragment>
  )
}

export default OrderSummary;
