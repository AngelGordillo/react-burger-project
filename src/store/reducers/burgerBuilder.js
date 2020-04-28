import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';
const intialState = {
    ingredients: null,
    totalPrice: 5,
    error: false
}
const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.3,
    meat: 1.0,
    salad: 0.4
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatesIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatesIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatesIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatesIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 5,
        error: false
    });
}
const fetchIngFail = (state, action) => {
    return updateObject(state, { error: true })
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ING: return addIngredient(state, action);
        case actionTypes.REMOVE_ING: return removeIngredient(state, action);
        case actionTypes.SET_ING: return setIngredient(state, action)
        case actionTypes.FETCH_ING_FAILLED:return fetchIngFail(state,action) ;
        default: return state;
    }
}

       /* return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        }; */
export default reducer;