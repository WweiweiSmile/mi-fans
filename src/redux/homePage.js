import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
export const actiontor = createActions({
    get_user: () => {
        let data = async () => {
            let res = await fetch("http://localhost:8888/getUser", {
                method: "post",
            });
            return await res.json();
        };
        return data;
    },
    get_hero_goods: async () => {
        let res = await fetch("http://localhost:8888/getHeroGoods", {
            method: "post",
        });
        return await res.json();
    },
});

const userData = handleActions(
    {
        get_user: (state, { payload }) => {
            return payload;
        },
    },
    { ddd: "ddddddd" }
);
const heroGoodsData = handleActions(
    {
        get_hero_goods: (state, { payload }) => {
            return payload;
        },
    },
    { ddd: "ddddddd" }
);

export default combineReducers({ userData, heroGoodsData });
