import {createActions, handleActions} from "redux-actions";
import {combineReducers} from "redux";
import axios from "axios";

export const actiontor = createActions({
    get_mi_phone: async () => {
        let res = await axios.post("/cs/nav/getMiPhone", {});
        return await res;
    },
    get_redmi_phone: async () => {
        let res = await axios.post("/cs/nav/getRedmiPhone", {});
        return await res;
    },
    get_phone: async () => {
        let res = await axios.post("/cs/nav/getPhone", {});
        return await res;
    },
});


const miPhoneData = handleActions({
    get_mi_phone: (state, {payload}) => payload,
}, {});
const redmiPhoneData = handleActions({
    get_redmi_phone: (state, {payload}) => payload,
}, {});
const phoneData = handleActions({
    get_phone: (state, {payload}) => payload,
}, {});
export default combineReducers({miPhoneData,redmiPhoneData,phoneData});
