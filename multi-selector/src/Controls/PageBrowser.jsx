import { React, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import PageSlice from '../Store/Slices/Browser';
import OperationSlice from '../Store/Slices/Operations';

export default function PageBrowser({ loadResult, children }) {
    const store = configureStore({
        preloadedState: {},
        reducer: {
            operation: OperationSlice.reducer
            filter: 
        }
    });
 
    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    )
}