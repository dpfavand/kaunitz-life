import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // eslint-disable-next-line react/prop-types
  return (
    <div>
      Current Count: <b>{count}</b>
      <br />
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
