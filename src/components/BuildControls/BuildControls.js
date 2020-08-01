import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          ingredientAdded={() => props.ingredientAdded(control.type)}
          ingredientRemoved={() => props.ingredientRemoved(control.type)}
          disabled={props.disabledInfo[control.type]} />
      ))}
      <button 
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.checkout}
      >ORDER NOW</button>
    </div>
  )
}

export default BuildControls;
