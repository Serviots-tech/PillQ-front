import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../actions/userAction';

const initialState: any = {
    data: null,
    isLoading: true,
    error: null,
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        clearUserDetails: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getUserProfile.fulfilled, (state: any, action: any) => {
            console.log("🚀 ~ builder.addCase ~ action:", action)
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

export const { clearUserDetails } = userProfileSlice.actions;

