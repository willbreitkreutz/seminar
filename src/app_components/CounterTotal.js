import React, { useState } from "react";

import Counter from "./Counter";

const weights = {
  personal: 10,
  carryon: 30,
  checked: 55
};

export default function CounterTotal() {
  const [personalCount, setPersonalCount] = useState(0);
  const [carryonCount, setCarryonCount] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  const total =
    personalCount * weights.personal +
    carryonCount * weights.carryon +
    checkedCount * weights.checked;

  return (
    <div>
      <div style={{margin: 20}}>
        <h1>{`Total: ${total}`}</h1>
      </div>
      <div>
        <Counter
          count={personalCount}
          setCount={setPersonalCount}
          weight={weights.personal}
          title={"Personal Item"}
        />
        <Counter
          count={carryonCount}
          setCount={setCarryonCount}
          weight={weights.carryon}
          title={"Carry-On Bag"}
        />
        <Counter
          count={checkedCount}
          setCount={setCheckedCount}
          weight={weights.checked}
          title={"Checked Bag"}
        />
      </div>
    </div>
  );
}
