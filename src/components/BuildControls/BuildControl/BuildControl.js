import React from 'react'

import styles from './BuildControl.module.css';

const BuildControl = props => {
  let style = styles.Less;
  if (props.disabled)
    style += ' disabled';

  return (
    <div className={styles.BuildControl}>
      <button
        className={style}
        onClick={props.ingredientRemoved}
        disabled={props.disabled}
      >-</button>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.More}
        onClick={props.ingredientAdded}
      >+</button>
    </div>
  )
}

export default BuildControl
