import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
	get_order: async (userId) => {
		let res = await axios.post("/cs/myOrder/getOrder", { userId });
		return await res;
	},
	get_order_one: async (orderId) => {
		let res = await axios.post("/cs/myOrder/getOrderOne", { orderId });
		return await res;
	},
	pay_order: async (orderId) => {
		/* 将 订单状态修改为已付款状态*/
		let res = await axios.post("/cs/myOrder/payOrder", { orderId: orderId });
		return await res;
	},
	un_pay_order: (orderId) => {
		/* 组件离开时 清空状态 */
		return {};
	},
});
const orderData = handleActions(
	{
		get_order: (state, { payload }) => payload,
	},
	{}
);
const orderOneData = handleActions(
	{
		get_order_one: (state, { payload }) => payload,
	},
	{}
);
const payOrderResult = handleActions(
	{
		pay_order: (state, { payload }) => payload,
		un_pay_order: (state, { payload }) => payload,
	},
	{}
);
export default combineReducers({ orderData, orderOneData, payOrderResult });
