import React from "react";

export default function Json(props) {
  // eslint-disable-next-line react/prop-types
  const { json } = props;
  return (
    <div>
      <b>JSON 2345:</b>
      {JSON.stringify(json)}
    </div>
  );
}
