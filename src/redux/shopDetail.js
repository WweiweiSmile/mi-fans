import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
	get_goods_info: async (id) => {
		let res = await axios.post("/cs/detail/getGoodsInfo", {
			_id: id,
		});
		return await res;
	},
	join_buy_car: async (userId, goods) => {
		let res = await axios.post("/cs/joinBuyCar", {
			userId: userId,
			goodsItem: goods,
		});
		return await res;
	},
	un_join_buy_car: (userId, goods) => {
		return {};
	},

	get_goods_appraise: async (goodsId) => {
		let res = await axios.post("/cs/detail/goodsAppraise", {
			goodsId,
		});

		return await res;
	},
});

const goodsInfoData = handleActions(
	{
		get_goods_info: (state, { payload }) => payload,
	},
	{}
);
const joinBuyCarData = handleActions(
	{
		join_buy_car: (state, { payload }) => payload,
		un_join_buy_car: (state, { payload }) => payload,
	},
	{}
);
const goodsAppraiseData = handleActions(
	{
		get_goods_appraise: (state, { payload }) => payload,
	},
	{}
);

export default combineReducers({
	goodsInfoData,
	joinBuyCarData,
	goodsAppraiseData,
});
