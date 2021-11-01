import { React, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import PageSlice from '../Store/Slices/Browser';

export default function PageBrowser({ loadResult, children }) {
    const store = configureStore({
        preloadedState: {},
        reducer: combineReducers({page: PageSlice.reducer})
    });
 
    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    )
}