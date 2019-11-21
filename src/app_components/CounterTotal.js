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
  'doBagsPersonalAdd',
  'doBagsCarryonAdd',
  'doBagsCheckedAdd',
  'doBagsPersonalRemove',
  'doBagsCarryonRemove',
  'doBagsCheckedRemove',
  function CounterTotal({
    bagsPersonalCount, 
    bagsCarryonCount,
    bagsCheckedCount,
    bagsPersonalWeight, 
    bagsCarryonWeight,
    bagsCheckedWeight,
    doBagsPersonalAdd,
    doBagsCarryonAdd,
    doBagsCheckedAdd,
    doBagsPersonalRemove,
    doBagsCarryonRemove,
    doBagsCheckedRemove,
  }) {
    return (
      <div>
        <div>
          <Counter
            count={bagsPersonalCount}
            onAdd={doBagsPersonalAdd}
            onRemove={doBagsPersonalRemove}
            weight={bagsPersonalWeight}
            title={"Personal Item"}
            detailsLink={'/personal'}
          />
          <Counter
            count={bagsCarryonCount}
            onAdd={doBagsCarryonAdd}
            onRemove={doBagsCarryonRemove}
            weight={bagsCarryonWeight}
            title={"Carry-On Bag"}
            detailsLink={'/carryon'}
          />
          <Counter
            count={bagsCheckedCount}
            onAdd={doBagsCheckedAdd}
            onRemove={doBagsCheckedRemove}
            weight={bagsCheckedWeight}
            title={"Checked Bag"}
            detailsLink={'/checked'}
          />
        </div>
      </div>
    );
  }
)