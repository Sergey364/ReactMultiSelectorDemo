import { React } from 'react'
import { ContextProvider } from '../Contexts/DataContext';
import { configureStore } from '@reduxjs/toolkit';
import OperationSlice from '../Store/Slices/Operations';

export default function PageBrowser({ loadResult, children }) {
    const store = configureStore({
        preloadedState: {},
        reducer: {
            operation: OperationSlice.reducer
        }
    });
 
    return (
        <ContextProvider store={store}>
            {children}
        </ContextProvider>
    )
}