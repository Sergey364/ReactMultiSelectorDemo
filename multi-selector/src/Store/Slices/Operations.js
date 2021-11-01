import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'operation',
    initialState: {
        selectedKeys: [],
        excludedKeys: [],
        items: []
    },
    reducers: {
        setSelection(state, value) {
            state.selectedKeys = value.payload.marked;
            state.excludedKeys = value.payload.excluded;
        },
        setListMarkedKey(state, value) {
            if (state.selectedKeys.length === 0) {
                state.selectedKeys.push(value.payload);
            }
        },
        unselectAll(state) {
            state.selectedKeys = [];
            state.excludedKeys = [];
        },

        selectAll(state) {
            state.selectedKeys = [null];
            state.excludedKeys = [null];
        }
    }
});

export default slice;
export const actions = slice.actions;