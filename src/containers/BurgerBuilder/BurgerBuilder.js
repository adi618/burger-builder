import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    checkout: false
  }

  updatePurchaseState = ingredients => {
    const totalIngredients = Object.values(ingredients)
      .reduce((acc, el) => acc + el);
    this.setState({ purchasable: totalIngredients > 0 });
  }

  addIngredientHandler = type => {
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    let newTotalPrice = this.state.totalPrice;
    newTotalPrice += INGREDIENT_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchaseState(newIngredients);
  }

  removeIngredientHandler = type => {
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    if (newIngredients[type] < 0)
      return;
    let newTotalPrice = this.state.totalPrice;
    newTotalPrice -= INGREDIENT_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });
    this.updatePurchaseState(newIngredients);
  }

  checkoutHandler = () => {
    this.setState({ checkout: true });
  }

  closeCheckoutHandler = () => {
    this.setState({ checkout: false })
  }

  checkoutCancelHandler = () => {
    this.setState({ checkout: false })
  }

  checkoutContinueHandler = () => {
    alert('Burger ordered!');
  }

  render() {
    let disabledInfo = { ...this.state.ingredients };
    for (let ingredient in disabledInfo) {
      disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.checkout}
          closeModal={this.closeCheckoutHandler}>
          <OrderSummary 
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
          price={this.state.totalPrice} />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          checkout={this.checkoutHandler} />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
