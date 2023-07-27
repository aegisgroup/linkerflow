import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme/theme.slice.ts";

const rootReducer = combineReducers({
	theme: themeReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']
