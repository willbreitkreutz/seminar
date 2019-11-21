import React from 'react';
import { connect } from 'redux-bundler-react';

function Header({ bagsTotalWeight }) {
    return (
        <>
            <div className="float-right">
              <h2>{`Total: ${bagsTotalWeight}`}</h2>
            </div>
            <h2><a href="/">Counter App</a></h2>
        </>
    )
}

export default connect(
    'selectBagsTotalWeight',
    Header
);