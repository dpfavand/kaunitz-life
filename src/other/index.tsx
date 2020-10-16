import React from "react";

interface Thingy<T> {
  thing: T
}

function doThing(thing: number): Thingy<number> {
  return { thing };
}

export default function Other(props) {
  // eslint-disable-next-line react/prop-types
  const { page, post } = props;

  const newThing = doThing(2);

  return (
    <div>
      this again!
      <h1>{post}</h1>
      but...
      <ul>
        <li>{JSON.stringify(page)}</li>
        <li>{JSON.stringify(newThing)}</li>
      </ul>
    </div>
  );
}
