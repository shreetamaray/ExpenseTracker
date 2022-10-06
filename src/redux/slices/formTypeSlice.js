import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Add"
};

export const formTypeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setType } = formTypeSlice.actions;

export default formTypeSlice.reducer;