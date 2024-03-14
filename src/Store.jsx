import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Import thunk from redux-thunk

import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
});

let initialState = {};

const middleware = [thunk]; // Use thunk middleware directly

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
