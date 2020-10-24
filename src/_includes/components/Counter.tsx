import React, { useState } from "react";

interface CounterProps {
}

export default function Counter(props: CounterProps) {

  const [count, setCount] = useState(0);

  // eslint-disable-next-line react/prop-types
  return (
    <div>
      Current Count: <b>{count}</b><br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
