import React, { Component } from "react"
import { connect } from 'react-redux';

import CheckoutSumm from '../../components/Order/CheckoutSumm/CheckoutSumm';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route, Redirect } from "react-router-dom";

import * as actions from '../../store/actions/index';
class Checkout extends Component {


    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutApprovedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to='/' />

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
            summary = (
                <div>
                    {purchasedRedirect}
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
        return summary;
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout);