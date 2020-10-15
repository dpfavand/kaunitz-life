import React from "react";

export default function Other(props) {
  // eslint-disable-next-line react/prop-types
  const { page, post } = props;
  return (
    <div>
      this again
      <h1>{post}</h1>
      but...
      <ul>
        <li>{JSON.stringify(page)}</li>
        <li>{JSON.stringify(post)}</li>
      </ul>
    </div>
  );
}
