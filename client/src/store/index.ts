import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
}
);

export type RootState = ReturnType<typeof rootReducer>;
