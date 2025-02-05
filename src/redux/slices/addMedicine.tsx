import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    data: null,
    error: null,
};

export const addMedicine = createSlice({
    name: 'addMedicine',
    initialState,
    reducers: {
        setAddMedicine: (state, action) => {
            state.data = { ...state.data,...action.payload};
        }
      
    },
});

export const { setAddMedicine } = addMedicine.actions;

