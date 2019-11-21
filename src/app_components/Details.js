import React from 'react';
import { connect } from 'redux-bundler-react';

export default connect(
  'selectBagDetailsByCategory',
  function Details({ bagDetailsByCategory: details }){
    return (
      <div>
        <h1>{ details.title }</h1>
        <ul className="list-group">
          {
            details.items.map((item, i) => {
              return (
                <li 
                  className="list-group-item list-group-item-action"
                  key={i}
                >
                  { `Bag ${i+1}: added at ${item.time}` }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
)