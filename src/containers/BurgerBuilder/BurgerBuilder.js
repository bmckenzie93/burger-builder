import React, { Component } from 'react';

import Frag from '../../hoc/Frag';
import Burger from '../../components/Burger/Burger';
import BuildCtrls from '../../components/Burger/BuildCtrls/BuildCtrls';

const INGREDIENT_PRICES = {
  salad: 0.3,
  meat: 1,
  bacon: 0.79,
  cheese: 0.69
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];
    const updatedCount = oldIngredientCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      ingredients:updatedIngredients,
      totalPrice: updatedPrice
    });
  }
  
  removeIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];

    if(oldIngredientCount <= 0) { return; }
    
    const updatedCount = oldIngredientCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceSubtraction;

    
      this.setState({
      ingredients:updatedIngredients,
      totalPrice: updatedPrice
      });
    

  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return(
      <Frag>
        <Burger ingredients={this.state.ingredients} />
        <BuildCtrls 
          addHandler={this.addIngredientHandler}
          subtractHandler={this.removeIngredientHandler}
          disabled={disabledInfo} />
      </Frag>
    );
  }
}