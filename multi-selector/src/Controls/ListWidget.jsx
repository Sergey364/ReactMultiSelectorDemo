import { React, useContext } from 'react';
import { DataContext } from '../Contexts/DataContext';
import { List } from './List';

export function ListWidget() {
    const value = useContext(DataContext);
    return (
        <List items={[]} loading={false}/>
    )
}