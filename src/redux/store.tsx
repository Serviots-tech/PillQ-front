import { configureStore } from '@reduxjs/toolkit';
import { addMedicine } from './slices/addMedicine';
import { isLoggedInSlice } from './slices/isLoggedIn';
import { registerAsGuest } from './slices/registerAsGuest';
import { userProfileSlice } from './slices/userSlice';

const store = configureStore({
	reducer: {
		userProfile: userProfileSlice.reducer,
		isLoggedIn: isLoggedInSlice.reducer,
		guestUser: registerAsGuest.reducer,
		addMedicine: addMedicine.reducer
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
