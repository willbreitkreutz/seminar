import React from 'react';
import { connect } from 'redux-bundler-react';

function Header({ bagsTotalWeight }) {
    return (
        <>
            <div style={{margin: 20, float: 'right'}}>
                <h1>{`Total: ${bagsTotalWeight}`}</h1>
            </div>
            <h2><a href="/">Counter App</a></h2>
        </>
    )
}

export default connect(
    'selectBagsTotalWeight',
    Header
);