import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/costCenterSlice'
import { isLoggedInSlice } from './slices/isLoggedIn';
import { registerAsGuest } from './slices/registerAsGuest';
import { addMedicine } from './slices/addMedicine';

const store = configureStore({
	reducer: {
		userProfile: AuthSlice.reducer,
		isLoggedIn: isLoggedInSlice.reducer,
		guestUser: registerAsGuest.reducer,
		addMedicine: addMedicine.reducer
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
