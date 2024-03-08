import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "test1",
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    SET_TEST(state, action) {
      state.test = action.payload;
    },
  },
});

export const { SET_TEST } = commonSlice.actions;

export default commonSlice.reducer;
