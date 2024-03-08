import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoveredGnb: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    SET_HOVERED_GNB(state, action) {
      state.hoveredGnb = action.payload;
    },
  },
});

export const { SET_HOVERED_GNB } = commonSlice.actions;

export default commonSlice.reducer;
