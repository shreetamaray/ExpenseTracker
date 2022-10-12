import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import formTypeReducer from "./slices/formTypeSlice";
import errorSlice from "./slices/errorSlice";
import expensesSlice from "./slices/expensesSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        formType: formTypeReducer,
        error: errorSlice,
        expensesSlice: expensesSlice
    },
});