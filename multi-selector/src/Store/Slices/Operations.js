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
            const listId = value.payload.id;
            state[listId].selectedKeys = value.payload.marked;
            state[listId].excludedKeys = value.payload.excluded;
        },
        setListMarkedKey(state, value) {
            const listId = value.payload.id;
            if (state[listId].selectedKeys.length === 0) {
                state[listId].selectedKeys.push(value.payload);
            }
        },
        unselectAll(state, value) {
            const listId = value.payload.id;
            state[listId].selectedKeys = [];
            state[listId].excludedKeys = [];
        },

        selectAll(state, value) {
            const listId = value.payload.id;
            state[listId].selectedKeys = [null];
            state[listId].excludedKeys = [null];
        }
    }
});

export default slice;
export const actions = slice.actions;