import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axiosOrders';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';


class BurgerBuilder extends Component {
    /*     constructor(props){
            super(props);
            this.state = {
    
            }
        } */

    componentDidMount() {
        this.props.onInitIng();
    }

    state = {
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }
    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        //{ salad: true, meat: false'... },
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;


        let burger = this.props.error ? <p>The page cannot be loaded</p> : <Spinner />;
        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        price={this.props.price}
                        added={this.props.onIngAdd}
                        removed={this.props.onIngRemove}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </Auxiliary>
            );
            orderSummary = <OrderSummary
                continue={this.purchaseContinueHandler}
                cancel={this.purchaseCancelHandler}
                ingredients={this.props.ings}
                price={this.props.price.toFixed(2)}
            />;
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngAdd: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngRemove: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIng: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));