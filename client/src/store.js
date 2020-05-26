import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
// import {bindActionCreators} from "redux";

//Setting store initial state
const initialState = {};

//Creating combined reducers that will be used in the store to handle state.
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

//Establishing compose to be able to pass multiple store enhancers to the store.
//Store enhancers are high order functions that allow you to pass extra functionality to the store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating the redux store and applying thunk middleware for asynchronous use of dispatch
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;