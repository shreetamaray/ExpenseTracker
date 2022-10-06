import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    showError: false,
    errorMessage: ''
  }
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    showError: (state, action) => {
      state.value.showError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.value.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showError, setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;