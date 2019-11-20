import React from 'react';

import CounterButton from "./CounterButton";

function Counter({count, setCount, weight, title}) {

    return (
        <div style={{display: "inline-block", margin: 20}}>
            <h2>{ title }</h2>
            <p>{ `${count} x ${weight} = ${count*weight}` }</p>
            <CounterButton onClick={() => setCount(count + 1)} title={"Add 1"} />
            <CounterButton onClick={() => setCount(count - 1)} title={"Minus 1"} />
        </div>
    )
}

export default Counter;