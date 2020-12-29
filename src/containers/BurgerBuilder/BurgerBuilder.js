import React, { Component } from 'react';

import Frag from '../../hoc/Frag';
import Burger from '../../components/Burger/Burger';
import BuildCtrls from '../../components/Burger/BuildCtrls/BuildCtrls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'


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
    totalPrice: 4,
    canPurchase: false,
    isPurchasing: false
  }

  updateCanPurchase(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

      this.setState({canPurchase: sum > 0});
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
    
    this.updateCanPurchase(updatedIngredients);
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
    
    this.updateCanPurchase(updatedIngredients);
  }

  isPurchasingHandler = () => {
    this.setState({isPurchasing: true});
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
        <Modal show={this.state.isPurchasing}>
          <OrderSummery ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildCtrls 
          addHandler={this.addIngredientHandler}
          canPurchase={this.state.canPurchase}
          orderNow={this.isPurchasingHandler}
          subtractHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice} />
      </Frag>
    );
  }
}