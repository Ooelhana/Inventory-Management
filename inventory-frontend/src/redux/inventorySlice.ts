import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InventoryState {
    employees: Employee[];
    items: Item[];
    withdrawalRecords: WithdrawalRecord[];
}

const initInventoryState: InventoryState = {
    employees: [],
    items: [],
    withdrawalRecords: [],
};

const inventorySlice = createSlice({
    name: "inventory",
    initialState: initInventoryState,
    reducers: {
        setEmployees(state, action: PayloadAction<Employee[]>) {
            state.employees = action.payload;
        },
        setItems(state, action: PayloadAction<Item[]>) {
            state.items = action.payload;
        },
        setWithdrawalRecords(state, action: PayloadAction<WithdrawalRecord[]>) {
            state.withdrawalRecords = action.payload;
        },
    },
});

export default inventorySlice.reducer;
export const inventoryActions = inventorySlice.actions;
