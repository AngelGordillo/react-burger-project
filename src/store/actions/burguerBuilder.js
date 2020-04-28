import * as actionTypes from './actionsTypes';
import axios from '../../axiosOrders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_ING,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_ING,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_ING,
        ingredients: ingredients
    }
}

export const fetchIngFailled = () => {
    return {
        type: actionTypes.FETCH_ING_FAILLED,
    }
}
export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burguer-f6e80.firebaseio.com/ingredients.json')
            .then(response => {
               dispatch(setIngredients(response.data));
            })
            .catch(error => {
               dispatch(fetchIngFailled());
            });
    }
}