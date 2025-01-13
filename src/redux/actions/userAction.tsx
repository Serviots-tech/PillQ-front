import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteApiWithData, getApi, postApi, putApi } from '../../apis/apis';


export const getUserProfile = createAsyncThunk(
	'user/profile',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getApi('/user/profile');
			return response.data;
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error?.response?.data);
		}
	}
);

// export const paginateUserAction = createAsyncThunk(
// 	'users/paginateUsers',
// 	async (params: any = {}, { rejectWithValue, getState }: any) => {
// 		const alreadyAvailableUsers = getState().users.data;
// 		try {
// 			const response = await getApi('/users', {
// 				...params,
// 				company: localStorage.getItem('companyId'),
// 			});
// 			return [...alreadyAvailableUsers, ...response.data.data];
// 		} catch (error: any) {
// 			if (!error.response) {
// 				throw error;
// 			}
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// export const inviteUserAction = createAsyncThunk(
// 	'users/inviteUser',
// 	async (data: object, { rejectWithValue }) => {
// 		try {
// 			const response = await postApi('/users/invite-user', data);
// 			return response.data;
// 		} catch (error: any) {
// 			if (!error.response) {
// 				throw error;
// 			}
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// export const editUserAction = createAsyncThunk(
// 	'users/editUser',
// 	async (data: any, { rejectWithValue }) => {
// 		try {
// 			const response = await putApi('/users', data);

// 			return {
// 				response: response.data,
// 				editData: data,
// 				isStatusChange: data?.isChangeStatus,
// 			};
// 		} catch (error: any) {
// 			if (!error.response) {
// 				throw error;
// 			}
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// export const reinviteUserAction = createAsyncThunk(
// 	'users/reinviteUser',
// 	async (id: string, { rejectWithValue }) => {
// 		try {
// 			const response = await postApi(`/users/reinvite-user/${id}`);

// 			return response.data;
// 		} catch (error: any) {
// 			if (!error.response) {
// 				throw error;
// 			}
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// export const deleteUserAction = createAsyncThunk(
// 	'users/deleteUser',
// 	async (data: any, { rejectWithValue }) => {
// 		try {
// 			const user = data?.userId;
// 			const response = await deleteApiWithData('/users', {
// 				user: user,
// 			});

// 			return { response: response.data, id: data?.id };
// 		} catch (error: any) {
// 			if (!error.response) {
// 				throw error;
// 			}
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );
