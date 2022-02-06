import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventorySlice";

const store = configureStore({
    reducer: {
        inventorySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
