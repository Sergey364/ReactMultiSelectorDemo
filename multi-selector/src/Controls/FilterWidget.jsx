import { React, useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import { Filter } from './Filter';

export function FilterWidget() {
    const { setFilter } = useContext(DataContext);
    const onFilterChanged = (type) => {
        setFilter({
            type
        });
    }
    return (
        <Filter onChange={onFilterChanged} />
    )
}