import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Hike {
    _id: string | null;
    name: string | null;
    rating?: number;
    district: string | null;
    description: string | null;
    image: string; 
    map: string; 
    level: string | null;
}

interface PostState {
    savedhikes: Hike[];
}

const initialState: PostState = {
    savedhikes: []
};

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        savedHikes(state, action: PayloadAction<Hike[]>) {
            action.payload.forEach((hikeToAdd) => {
                // Check if the hikeToAdd already exists in state.savedhikes
                if (!state.savedhikes.some((hike) => hike._id === hikeToAdd._id)) {
                    state.savedhikes.push(hikeToAdd);
                }
            });
        }
    }
});

export const { savedHikes } = savedSlice.actions;
export default savedSlice.reducer;
