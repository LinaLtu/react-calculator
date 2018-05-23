import React from "react";
import Button from "./Button.js";

export default class Display extends React.Component {
  constructor() {
    super();
  }

  onClick(){
    console.log("worked?");
  }

  render() {
    return <div className="output">display: </div>;
  }
}
