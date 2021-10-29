export default class SourceController {
    constructor({ filter, items }) {
        this._source = [{
            id: '1',
            title: 'Audi',
            type: 'auto'
        },
        {
            id: '2',
            title: 'BMW',
            type: 'auto'
        },
        {
            id: '3',
            title: 'Онищук',
            type: 'human'
        },
        {
            id: '4',
            title: 'Крайнов',
            type: 'human'
        }];
        this._filter = filter;
        this._items = items || this._source;
    }

    load() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const itemType = this._filter.type;
                this._items = this._source.filter((item) => {
                    return item.type === itemType;
                });
                resolve(this._items);
            }, 3000);
        });
    }

    setFilter(filter) {
        this._filter = filter;
    }
}