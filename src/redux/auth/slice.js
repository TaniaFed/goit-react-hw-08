import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(logIn.pending, handlePending)
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, handleRejected)
            .addCase(logOut.pending, handlePending)
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    }
        
})

export default authSlice.reducer;
