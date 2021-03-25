import { createStore, combineReducers } from "redux";
import HomePage from "./homePage";
let reducers = combineReducers({ HomePage });
let store = createStore(reducers);
export default store;
