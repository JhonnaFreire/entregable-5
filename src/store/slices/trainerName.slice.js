import { createSlice } from '@reduxjs/toolkit';

export const TrainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainerG: (state, action) => action.payload
    }
})

export const { setTrainerG } = TrainerSlice.actions;

export default TrainerSlice.reducer;
