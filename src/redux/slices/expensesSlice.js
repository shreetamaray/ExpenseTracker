import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [],
    selectedId: ''
};

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setExpenses: (state, action) => {
            return {...state, expenses: [...action.payload]};
        },
        setSelectedExpense: (state, action) => {
            state.selectedId = action.payload
        }
    }
  });

export const { setExpenses, setSelectedExpense } = expensesSlice.actions;

export default expensesSlice.reducer;