import React from 'react';
//import classnames from 'classnames';
import CounterButton from "./CounterButton";

const classnames = (obj) => {
    return Object.keys(obj).map((key) => {
        return !!obj[key] ? key : '';
    }).join(' ');
}

function Counter({detailsLink, count, weight, title, onAdd, onRemove}) {
    const badgeClass = classnames({
        "badge": true,
        "badge-pill": true,
        "badge-info": count * weight < 200,
        "badge-warning": count * weight >= 200
    })
    return (
        <div style={{display: "inline-block", position:'relative', margin: 20}}>
            <h3>
                <a href={detailsLink}>{ title }</a>
            </h3>
            <span 
                style={{
                    position:'absolute', 
                    top: '-10px', 
                    right: '10px',
                    fontSize: '0.8em'
                }}
                className={badgeClass}
            >{ count }</span>
            <p>{ `${count*weight} lbs total` }</p>
            <CounterButton onClick={ onAdd } title={"Add 1"} />
            <CounterButton onClick={ onRemove } title={"Minus 1"} />
        </div>
    )
}

export default Counter;