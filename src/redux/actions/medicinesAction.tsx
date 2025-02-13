// /api/medicine

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi } from '../../apis/apis';


export const getUserMedicines = createAsyncThunk(
    'user/medicines',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getApi('/medicine');
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);