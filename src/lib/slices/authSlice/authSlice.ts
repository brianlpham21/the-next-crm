import { SliceNames } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: SliceNames.auth,
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
