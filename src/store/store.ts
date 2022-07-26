import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import qaSlice from "./qaSlice";
import thunk, { ThunkAction } from "redux-thunk";

const reducer = combineReducers({
  qa: qaSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof reducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
