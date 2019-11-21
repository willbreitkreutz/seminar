import React from "react";

export default function CounterButton(props){
    return(
        <button
            className="btn btn-lg btn-primary mr-2"
            title={`This button does: ${props.title}`}
            onClick={props.onClick}
        >
        {props.title}
        </button>
    )
}

