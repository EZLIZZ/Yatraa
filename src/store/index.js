import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { setupAuthListener } from "@/lib/authListener";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

setupAuthListener(store); 
