import { createSlice, combineReducers } from '@reduxjs/toolkit';
import operationsSlice from './Operations';

const slice = createSlice({
    name: 'browser',
    initialState: {},
    reducers: {
        operation: operationsSlice.reducer
    }
});

export default slice;
export const actions = slice.actions;