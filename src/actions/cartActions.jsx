// cartActions.js
import { ADD_TO_CART } from "../constants/cartConstants";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: { product } });
};
