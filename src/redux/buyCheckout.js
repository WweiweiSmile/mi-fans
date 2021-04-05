import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
    // 获取 该用户在购物车页面被选中的商品
    get_goods_choose: async (userId, choose) => {
        let res = await axios.post("/cs/buyCheckout/getGoodsChoose", {
            userId,
        });
        return await res;
    },
    place_order: async (order) => {
        /*  status 付款成功状态为2 未付款状态为1 */
        let res = await axios.post("/cs/buyCheckout/placeOrder", order);
        return await res;
    },
});

const goodsChooseData = handleActions(
    {
        get_goods_choose: (state, { payload }) => payload,
    },
    {}
);
const placeOrderResult = handleActions(
    {
        place_order: (state, { payload }) => payload,
    },
    {}
);

export default combineReducers({
    goodsChooseData,
    placeOrderResult,
});
