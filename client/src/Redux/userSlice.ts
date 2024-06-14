// userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    loading: boolean;
    error: string | null;
    currentUser: User | null; // Update to use a specific user type
}

interface User {
    avatar: string; 
    name:string,
    id:string,
    email:string
}


const initialState: UserState = {
    loading: false,
    error: null,
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<User>) {
            state.loading = false;
            state.error = null;
            state.currentUser = action.payload;
        },
        loginFail(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
        }
    }
});

export const { loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
