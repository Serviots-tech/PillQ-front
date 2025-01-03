import { configureStore } from '@reduxjs/toolkit';
// import AuthSlice from './slices/costCenterSlice';


const store = configureStore({
	reducer: {
		// userProfile: profileSlice.reducer,
		// auth: AuthSlice.reducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
