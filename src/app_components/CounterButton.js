import React from "react";

export default function CounterButton(props){
    return(
        <button
            title={`This button does: ${props.title}`}
            onClick={props.onClick}
        >
        {props.title}
        </button>
    )
}

