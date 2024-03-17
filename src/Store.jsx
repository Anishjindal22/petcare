import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { alertSlice } from "./redux/features/alertSlice";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userSlice } from "./redux/features/userSlice";

// Combine reducers
const rootReducer = combineReducers({
  alerts: alertSlice.reducer,
  user: userSlice.reducer,
  products: productReducer,
  cart: cartReducer,
});

// Create initial state
const initialState = {};

// Define middleware
const middleware = [thunk];

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export default store;
