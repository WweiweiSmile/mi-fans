import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
	push_address: async (userId, address) => {
		let res = await axios.post("/cs/address/pushAddress", { userId, address });
		return await res;
	},
	delete_address: async (data) => {
		let res = await axios.post("/cs/address/deleteAddress", data);
		return await res;
	},
	modify_address: async (data) => {
		let res = await axios.post("/cs/address/modifyAddress", data);
		return await res;
	},
});
const pushAddressResult = handleActions(
	{
		push_address: (state, { payload }) => payload,
	},
	{}
);
const deleteAddressResult = handleActions(
	{
		delete_address: (state, { payload }) => payload,
	},
	{}
);
const modifyAddressResult = handleActions(
	{
		modify_address: (state, { payload }) => payload,
	},
	{}
);

export default combineReducers({
	pushAddressResult,
	deleteAddressResult,
	modifyAddressResult,
});
