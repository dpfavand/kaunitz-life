import React from "react";

export default function MainLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { page } = props;
  return <div>{JSON.stringify(page)}</div>;
}
