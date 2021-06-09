import React from "react";

export default function Empty({
  image = "/images/svg/noti.svg",
  title,
  children,
}) {
  return (
    <div className="notresult m-b-30">
      <img src={image} width="200px" alt="" />
      <h4>{title}</h4>
      {children}
    </div>
  );
}
