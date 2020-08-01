import React from 'react';

import Button from '../UI/Button/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ing => (
      <li key={ing}>
        <span style={{ textTransform: 'capitalize' }}>{ing}</span>: {props.ingredients[ing]}
      </li>)
    );

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Your Order</h3>
      <p>Selected ingredients:</p>
      <ul style={{ listStyleType: 'none', marginRight: '45px' }}>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button
        btnType='Danger'
        clicked={props.checkoutCanceled}>CANCEL</Button>
      <Button
        btnType='Success'
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default OrderSummary;
