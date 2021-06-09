import React from "react";

export default function Card(props) {
  props.onHandle();
  return <div>{props.title}</div>;
}
