import {
    useContextProviderDispatch,
    useContextProviderSelector
} from "../Contexts/DataContext";
import { List } from './List';

export function ListWidget({ id }) {
    const dispatch = useContextProviderDispatch();
    const selection = useContextProviderSelector((state) => {
        const kek = 0;
    });

    return (
        <List items={[]} loading={false}/>
    )
}