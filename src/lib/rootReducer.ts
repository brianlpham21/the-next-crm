import { authSlice, viewSlice } from "./slices";

export const reducer = {
  auth: authSlice.reducer,
  view: viewSlice.reducer,
};
