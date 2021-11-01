type TKey = string | number;

interface ISelection {
    selected: TKey[];
    excluded: TKey[];
}

export interface IOperationsController {
    setSelection: (selection: ISelection) => ISelection;
    getSelection: () => ISelection;
    setFilter: (filter: object) => void;
    toggleAll: () => ISelection;
    unselectAll: () => ISelection[];
    selectCount: (count: number) => ISelection;
    setListMarkedKey: (key: TKey) => ISelection;
    getCount: () => Promise<number> | number;
    update: (options: Partial<IOperationsControllerOptions>) => void;
}

export interface IOperationsControllerOptions {
    selectedKeys: TKey[];
    excludedKeys: TKey[];
    counterEndpoint: string;
    items: number;
    parentProperty: string;
    nodeProperty: string;
    filter: object;
}