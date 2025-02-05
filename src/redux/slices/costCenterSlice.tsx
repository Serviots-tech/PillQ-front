import { createSlice } from '@reduxjs/toolkit';
import { fetchCostCenterAction } from '../actions/costCenterAction';

const initialState: any = {
	data: null,
	isLoading: true,
	error: null,
};

const CostCenterSlice = createSlice({
	name: 'costCenter',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCostCenterAction.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(fetchCostCenterAction.fulfilled, (state:any, action:any) => {
			state.isLoading = false;
			state.data = action?.payload?.data;
		});
		builder.addCase(
			fetchCostCenterAction.rejected,
			(state, action: any) => {
				state.isLoading = false;
				state.error = action.payload;
			}
		);
	},
});

export default CostCenterSlice;
