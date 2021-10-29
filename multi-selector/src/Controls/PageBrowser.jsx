import { React, useState } from 'react'
import { DataContext } from '../Contexts/DataContext';
import SourceController from '../Controllers/SourceController';

export default function PageBrowser({ loadResult, children }) {
    const sourceController = new SourceController(loadResult);
    const reload = () => {
        sourceController.load().then((items) => {
            setContext({
                ...context,
                items
            })
        });
    };

    const setFilter = (filter) => {
        sourceController.setFilter(filter);
        setContext({
            ...context,
            loading: true
        })
        sourceController.load().then((items) => {
            setContext({
                ...context,
                items,
                loading: false
            });
        });
    };
    const [context, setContext] = useState({
        reload,
        setFilter,
        ...loadResult
    });
    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    )
}