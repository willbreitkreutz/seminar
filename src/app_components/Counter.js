import React from 'react';

import CounterButton from "./CounterButton";

function Counter({detailsLink, count, weight, title, onAdd, onRemove}) {

    return (
        <div style={{display: "inline-block", margin: 20}}>
            <h2><a href={detailsLink}>{ title }</a></h2>
            <p>{ `${count} x ${weight} = ${count*weight}` }</p>
            <CounterButton onClick={ onAdd } title={"Add 1"} />
            <CounterButton onClick={ onRemove } title={"Minus 1"} />
        </div>
    )
}

export default Counter;