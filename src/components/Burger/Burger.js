import React from 'react'

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let ingredientArr = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return <BurgerIngredient key={ingKey + index} type={ingKey} />;
      })
    })
    .reduce((acc, val) => {
      return acc.concat(val);
    }, []);
    
    if (ingredientArr.length === 0) {
      ingredientArr = <p>Please start adding ingredients!</p>
    }
    
  return(
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredientArr}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;

