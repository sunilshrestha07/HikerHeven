import { createSlice } from "@reduxjs/toolkit";

interface UserInitialStateInterface {
    loading?: boolean;
    error?: string | null;
    currentUser?: string | null;
}

const initialState: UserInitialStateInterface = {
    loading: false,
    error: null,
    currentUser: null
};


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.loading = false,
            state.error =null,
            state.currentUser = action.payload
        },
        loginFail:(state,action)=>{
            state.loading = false,
            state.error = action.payload,
            state.currentUser= null
        }
    }
});

export const {loginSuccess, loginFail} = userSlice.actions
export default  userSlice.reducer
