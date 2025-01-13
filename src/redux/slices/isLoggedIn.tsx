import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    isLoggedIn: false,
};

export const isLoggedInSlice = createSlice({
    name: 'isLoggedIn',
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            console.log("🚀 ~ action:", action)
            state.isLoggedIn = action.payload;
        },
      
    },
});

export const { setLoginStatus } = isLoggedInSlice.actions;

