import * as actionTypes from '../actions/actionsTypes';

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

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };

        case actionTypes.REMOVE_ING:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_ING:
            return {
                ...state,
                ingredients: action.ingredients,
                error:false
            };
        case actionTypes.FETCH_ING_FAILLED:
            return {
                ...state,
                error:true
            };
        default:
            return state;
    }

}

export default reducer;