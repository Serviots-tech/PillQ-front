import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    data: null,
    error: null,
    isGuestUser:null
};

export const registerAsGuest = createSlice({
    name: 'registerAsGuest',
    initialState,
    reducers: {
        setRegisterAsGuest: (state, action) => {
            state.data = { ...state.data,...action.payload};
        },
        setGuestUser: (state, action) => {
            state.isGuestUser = action.payload ;
        },
        clearGuestUserData: (state) => {
            state.data = null;
        },
      
    },
});

export const { setRegisterAsGuest, setGuestUser, clearGuestUserData } = registerAsGuest.actions;

