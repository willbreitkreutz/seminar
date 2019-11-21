import React from 'react';
import { connect } from 'redux-bundler-react';

export default connect(
  'selectBagDetailsByCategory',
  function Details({ bagDetailsByCategory: details }){
    return (
      <div>
        <h1>{ details.title }</h1>
        <ul>
          {
            details.items.map((item, i) => {
              return (
                <li key={i}>{ `Bag ${i+1}: added at ${item.time}` }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
)