import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSumm.module.css'
const checkoutSumm = (props) => {
    return (
        <div className={classes.CheckoutSumm}>
            <h1>Hope yu will enjoy</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
            clicked={props.checkoutCancelled}
            buttonType='Danger'>CANCEL</Button>
            <Button 
            clicked={props.checkoutApproved}
            buttonType='Success'>CONTINUE</Button>
        </div>
    )
}

export default checkoutSumm;