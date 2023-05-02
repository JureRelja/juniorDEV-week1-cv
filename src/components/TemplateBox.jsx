import React from "react";
import "../App.css";

function TemplateBox(props) {
  return (
    <div className="templateBox">
      <h1 className="templateBox-header">{props.heading}</h1>
      {props.children}
    </div>
  );
}

export default TemplateBox;
