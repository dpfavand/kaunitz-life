import React from "react";
import Json from "../components/Json";

// console.log("MAIN");

export default function MainLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { page, post, posts } = props;

  let thing: number;

  thing = 3;

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <h1>{post.title}</h1>
      but...This is a change {thing} again
      <ul>
        <li>
          <Json json={page} />
        </li>
        <li>{JSON.stringify(post)}</li>
        <li>{JSON.stringify(posts)}</li>
      </ul>
    </div>
  );
}
