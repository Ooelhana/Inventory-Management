import { configureStore } from "@reduxjs/toolkit";
import recordSlice from "./recordSlice";

const store = configureStore({
    reducer: {
        recordSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
