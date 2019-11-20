import React from "react";
import { connect } from 'redux-bundler-react';
import Counter from "./Counter";

export default connect(
  'selectBagsPersonalCount',
  'selectBagsCarryonCount',
  'selectBagsCheckedCount',
  'selectBagsPersonalWeight',
  'selectBagsCarryonWeight',
  'selectBagsCheckedWeight',
  'selectBagsTotalWeight',
  'doBagsPersonalSet',
  'doBagsCarryonSet',
  'doBagsCheckedSet',
  function CounterTotal({
    bagsPersonalCount, 
    bagsCarryonCount,
    bagsCheckedCount,
    bagsPersonalWeight, 
    bagsCarryonWeight,
    bagsCheckedWeight,
    bagsTotalWeight,
    doBagsPersonalSet,
    doBagsCarryonSet,
    doBagsCheckedSet,
  }) {
    return (
      <div>
        
        <div>
          <Counter
            count={bagsPersonalCount}
            setCount={doBagsPersonalSet}
            weight={bagsPersonalWeight}
            title={"Personal Item"}
          />
          <Counter
            count={bagsCarryonCount}
            setCount={doBagsCarryonSet}
            weight={bagsCarryonWeight}
            title={"Carry-On Bag"}
          />
          <Counter
            count={bagsCheckedCount}
            setCount={doBagsCheckedSet}
            weight={bagsCheckedWeight}
            title={"Checked Bag"}
          />
        </div>
      </div>
    );
  }
)