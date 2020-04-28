import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this could be a functional component

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey) => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        })
        return (
            <Auxiliary>
                <h3>YOUR ORDER</h3>
                <p>Those are your ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>TOTAL PRICE: {this.props.price}

                </p>
                <p>Continue to Checkout?</p>
                <Button buttonType='Danger' clicked={this.props.cancel} >CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.continue} >CONTINUE</Button>
            </Auxiliary>
        );
    }
};

export default OrderSummary;