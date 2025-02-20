import type { RootState } from "@/lib/store";

export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
