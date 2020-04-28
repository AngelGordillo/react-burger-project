import React, { Component } from "react"
import { connect } from 'react-redux';

import CheckoutSumm from '../../components/Order/CheckoutSumm/CheckoutSumm';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route } from "react-router-dom";

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutApprovedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSumm
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutApproved={this.checkoutApprovedHandler}
                    ingredients={this.props.ings}
                />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);