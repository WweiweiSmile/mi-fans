import { createActions, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import axios from "axios";

export const actiontor = createActions({
	submit_appraise: async (ob) => {
		let res = await axios.post("/cs/appraise/submitAppraise", ob);
		return await res;
	},
});
const submitAppraiseResult = handleActions(
	{
		submit_appraise: (state, { payload }) => payload,
	},
	{}
);

export default combineReducers({ submitAppraiseResult });
