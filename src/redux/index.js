import { createStore, combineReducers, applyMiddleware } from "redux";
import HomePage from "./homePage";
import Login from "./login";
import nav from './nav'
import reduxMiddleware from "./reduxMiddleware/reduxMiddleware";

let enhancer = applyMiddleware(reduxMiddleware);
let reducers = combineReducers({ HomePage, Login ,nav});
let store = createStore(reducers, {}, enhancer);
// let store = createStore(reducers);

export default store;
