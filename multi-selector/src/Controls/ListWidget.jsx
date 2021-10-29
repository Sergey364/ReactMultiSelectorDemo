import { React, useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import { List } from './List';

export function ListWidget() {
    const {items, loading} = useContext(DataContext);
    return (
        <List items={items} loading={loading}/>
    )
}