import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])]
        .map((_, i) => {
          return <BurgerIngredient
            key={ingredient + i}
            type={ingredient} />
        })
    })

  let ingredientsNumber = transformedIngredients
    .reduce((acc, el) => {
      return acc + el.length;
    }, 0);

  if (ingredientsNumber === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>
    }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
