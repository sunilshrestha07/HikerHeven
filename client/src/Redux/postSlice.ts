import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Hike {
    _id:string | null,
    name: string | null;
    rating?: number;
    district: string | null;
    description: string | null;
    image: string; 
    map: string; 
    level: string | null;
}

interface PostState {
    hikes: Hike[];
    isloaded: boolean
}

const initialState: PostState = {
    hikes: [],
    isloaded: false
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getAllHikes(state, action: PayloadAction<Hike[]>) {
            state.hikes = action.payload;
            state.isloaded = true
        }
    }
});

export const { getAllHikes } = postSlice.actions;
export default postSlice.reducer;
