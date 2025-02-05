import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/costCenterSlice'
import { isLoggedInSlice } from './slices/isLoggedIn';
import { registerAsGuest } from './slices/registerAsGuest';

const store = configureStore({
	reducer: {
		userProfile: AuthSlice.reducer,
		isLoggedIn: isLoggedInSlice.reducer,
		guestUser: registerAsGuest.reducer
		// auth: AuthSlice.reducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
