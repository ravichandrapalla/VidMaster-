import React from "react";

const Like = (props) => {
  let baseClass = "fa fa-heart";
  baseClass += props.liked ? "" : "-o";

  return (
    <i
      style={{ cursor: "pointer", color: "blue" }}
      onClick={props.onClick}
      className={baseClass}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
