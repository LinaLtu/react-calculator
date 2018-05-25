import React from "react";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = { currentInput: "" };
  }

  render() {
    return (
      <button
        className={this.props.classes}
        onClick={() => this.props.handleClick(this.props.sign)}
      >
        {this.props.sign}
      </button>
    );
  }
}
