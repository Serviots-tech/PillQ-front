import { createAsyncThunk } from '@reduxjs/toolkit'; 
// import { getAllCostCenter } from 'Api/masters/cost-center';

export const fetchCostCenterAction = createAsyncThunk(
	'costCenter',
	async (params: any, { rejectWithValue }) => {
		// try {
		// 	const response = await getAllCostCenter(params);
		// 	return response.data;
		// } catch (error: any) {
		// 	if (!error.response) {
		// 		throw error;
		// 	}
		// 	return rejectWithValue(error?.response?.data);
		// }

        return "dasccdsc"
	}
);
