import { React, useContext } from 'react';
import { Filter } from './Filter';
import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../Contexts/DataContext";

export function FilterWidget() {
    const dispatch = useContextProviderDispatch();
    const selection = useContextProviderSelector((state) => {
        const kek = 0;
    });
    const onFilterChanged = (type) => {
    }
    return (
        <Filter onChange={onFilterChanged} />
    )
}