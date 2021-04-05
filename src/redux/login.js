import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
    login: async (data) => {
        let res = await axios.post("/cs/login", data);
        return await res;
    },
    register: async (data) => {
        let res = await axios.post("/cs/register", data);
        return await res;
    },
    get_user: async (data) => {
        let res = await axios.post("/cs/getUser", data);
        return await res;
    },
    // 保存 sessionStroge 的数据 到redux
    save_user_to_redux: (userData) => {
        return userData;
    },
});
const loginData = handleActions(
    {
        login: (state, { payload }) => payload,
    },
    {}
);
const registerData = handleActions(
    {
        register: (state, { payload }) => payload,
    },
    {}
);
const userData = handleActions(
    {
        get_user: (state, { payload }) => payload,
        save_user_to_redux: (state, { payload }) => payload,
    },
    {}
);
export default combineReducers({ loginData, registerData, userData });
