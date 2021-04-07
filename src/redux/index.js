import { createStore, combineReducers, applyMiddleware } from "redux";
import HomePage from "./homePage";
import Login from "./login";
import Nav from "./nav";
import ShopDetail from "./shopDetail";
import BuyCar from "./buyCar";
import BuyCheckout from "./buyCheckout";
import MyOrder from "./myOrder";
import Appraise from "./appraise";
import Address from "./address";
import reduxMiddleware from "./reduxMiddleware/reduxMiddleware";

let enhancer = applyMiddleware(reduxMiddleware);
let reducers = combineReducers({
	HomePage,
	Login,
	Nav,
	BuyCar,
	ShopDetail,
	BuyCheckout,
	MyOrder,
	Appraise,
	Address,
});
let store = createStore(reducers, {}, enhancer);
// let store = createStore(reducers);

export default store;
