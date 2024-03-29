import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in text-center display-4`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {props.children}
    </div>
  );
}

export default Alert;
