import { createSlice } from '@reduxjs/toolkit';
import { fetchCostCenterAction } from '../actions/costCenterAction';
import { getUserMedicines } from '../actions/medicinesAction';

const initialState: any = {
    data: null,
    isLoading: true,
    error: null,
};

export const getMedicneSlice = createSlice({
    name: 'getMedicine',
    initialState,
    reducers: {
        updateDoseStatus: (state, action) => {
            const { date, id, status } = action.payload;

            if (state.data[date]) {
                state.data[date] = state.data[date].map((dose: any) =>
                    dose.id === id ? { ...dose, status } : dose
                );
            }
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getUserMedicines.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getUserMedicines.fulfilled, (state: any, action: any) => {
            console.log("🚀 ~ builder.addCase ~ action  ddd:", action)
            state.isLoading = false;
            state.data = action?.payload?.data;
        });
        builder.addCase(
            getUserMedicines.rejected,
            (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

export const { updateDoseStatus } = getMedicneSlice.actions;

