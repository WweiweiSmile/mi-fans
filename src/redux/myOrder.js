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
export default combineReducers({ orderData, orderOneData });
