import React from "react";

export default class Display extends React.Component {
  render() {
    return <div className="output">{this.props.inputValue}</div>;
  }
}
