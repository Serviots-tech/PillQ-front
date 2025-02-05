import { createSlice } from '@reduxjs/toolkit';
import { fetchCostCenterAction } from '../actions/costCenterAction';
import { getUserProfile } from '../actions/userAction';

const initialState: any = {
    data: null,
    isLoading: true,
    error: null,
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getUserProfile.fulfilled, (state: any, action: any) => {
            state.isLoading = false;
            state.data = action?.payload?.data;
        });
        builder.addCase(
            getUserProfile.rejected,
            (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

