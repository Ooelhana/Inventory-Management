import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Record {
    _id: string;
    name: string;
    employee: string;
    quantity: number;
    __v: number;
}

interface RecordState {
    records: Record[];
}

const initRecordState: RecordState = {
    records: [],
};

export const recordSlice = createSlice({
    name: "record",
    initialState: initRecordState,
    reducers: {
        setRecords(state, action: PayloadAction<Record[]>) {
            state.records = action.payload;
        },
    },
});

export const recordActions = recordSlice.actions;
export default recordSlice.reducer;
