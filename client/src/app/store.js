import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/authSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})