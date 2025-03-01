import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "false",
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState, // Ensure status is false initially
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.user;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
