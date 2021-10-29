import React, { useState } from "react";

export function Filter({ onChange, defaultValue }) {
    const [key, setKey] = useState(defaultValue);

    const onClick = (key) => {
        setKey(key);
        onChange(key);
    };

    return (
        <div class="filter">
            <h2>Фильтр</h2>
            <input type='radio' name='filter' onChange={() => {
                onClick('auto');
            }}/> auto
            <br />
            <input type='radio' name='filter' onChange={() => { onClick('human') }}/> human
        </div>
    )
}