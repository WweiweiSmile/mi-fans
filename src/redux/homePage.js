import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
    get_hero_goods: async () => {
        let res = await axios.post("/cs/getHeroGoods", {});
        return await res;
    },
    get_swiper: async () => {
        let res = await axios.post("/cs/getSwiper", {});
        return await res;
    },
    get_banner: async () => {
        let res = await axios.post("/cs/getBanner", {});
        return await res;
    },
    get_phone: async () => {
        let res = await axios.post("/cs/getPhone", {});
        return await res;
    },
    get_television: async () => {
        let res = await axios.post("/cs/getTelevision", {});
        return await res;
    },
    get_laptop: async () => {
        let res = await axios.post("/cs/getLaptop", {});
        return await res;
    },
});

const heroGoodsData = handleActions(
    {
        get_hero_goods: (state, { payload }) => payload,
    },
    {}
);

const swiperData = handleActions(
    {
        get_swiper: (state, { payload }) => payload,
    },
    {}
);
const bannerData = handleActions(
    {
        get_banner: (state, { payload }) => payload,
    },
    {}
);
const phoneData = handleActions(
    {
        get_phone: (state, { payload }) => payload,
    },
    {}
);
const televisionData = handleActions(
    {
        get_television: (state, { payload }) => payload,
    },
    {}
);
const laptopData = handleActions(
    {
        get_laptop: (state, { payload }) => payload,
    },
    {}
);
export default combineReducers({
    heroGoodsData,
    swiperData,
    bannerData,
    phoneData,
    televisionData,
    laptopData,
});
