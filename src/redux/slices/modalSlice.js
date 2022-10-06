import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const modalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    displayModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayModal } = modalSlice.actions;

export default modalSlice.reducer;