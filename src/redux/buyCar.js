import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
    get_buy_car: async (id) => {
        let res = await axios.post("/cs/getBuyCar", {
            userId: id,
        });
        return await res;
    },
    goods_operating: async (userId, goods, operating) => {
        let res = await axios.post("/cs/buyCar/goodsOperating", {
            userId,
            goods,
            operating,
        });
        return await res;
    },
    goods_choose: async (userId, choose) => {
        let res = await axios.post("/cs/buyCar/goodsChoose", {
            userId,
            choose,
        });
        return await res;
    },
    // 购物车页面立即下单时 为被选中的商品做 选中标记

    get_goods_choose: async (userId, choose) => {
        let res = await axios.post("/cs/buyCar/goodsChoose", {
            userId,
            choose,
        });
        return await res;
    },
});

const buyCarData = handleActions(
    {
        get_buy_car: (state, { payload }) => payload,
    },
    {}
);

const goodsOperatingResult = handleActions(
    {
        goods_operating: (state, { payload }) => payload,
    },
    {}
);
const goodsChooseResult = handleActions(
    {
        goods_choose: (state, { payload }) => payload,
    },
    {}
);
const goodsChooseData = handleActions(
    {
        get_goods_choose: (state, { payload }) => payload,
    },
    {}
);

export default combineReducers({
    buyCarData,
    goodsOperatingResult,
    goodsChooseResult,
    goodsChooseData,
});
