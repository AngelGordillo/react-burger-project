import React from "react";
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName],
        })
    }

    const ingredientOutput = ingredients.map(g => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block', 
                margin: '0 8px 0 0', 
                padding: '5px',
                border: '1px solid #ccc'
            }}
            key={g.name}>
            {g.name}
            ({g.amount})
        </span>
    })
    return (
        <div className={classes.Order}>
            <p>{ingredientOutput}</p>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;