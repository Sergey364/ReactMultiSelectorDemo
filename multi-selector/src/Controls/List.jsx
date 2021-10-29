import React from 'react';

export function List({ items, loading }) {
    return (<div class="list">
        <h2>Список</h2>
        {
            loading ?
                <h2>Идёт загрузка...</h2> :
                items.map((item) => {
                    return <div className="listItem" key={item.id}>{item.title}</div>;
                })
        }
        </div>
    )
}