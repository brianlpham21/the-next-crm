import { SliceNames } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const viewSlice = createSlice({
  name: SliceNames.view,
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = viewSlice.actions;

export default viewSlice.reducer;
