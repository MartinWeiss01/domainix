import { configureStore } from "@reduxjs/toolkit";
import mainerReducer from "./mainSlice"

export const store = configureStore({
    reducer: {
        mainer: mainerReducer,
    },
    devTools: false,
})