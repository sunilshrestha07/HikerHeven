import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Hike {
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
}

const initialState: PostState = {
    hikes: []
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getAllHikes(state, action: PayloadAction<Hike[]>) {
            state.hikes = action.payload;
        }
    }
});

export const { getAllHikes } = postSlice.actions;
export default postSlice.reducer;
