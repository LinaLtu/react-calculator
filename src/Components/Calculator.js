import React from "react";
import ButtonPanel from "./ButtonPanel.js";
import Display from "./Display.js";

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = { inputValue: "" };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({ inputValue: this.props.sign }, function() {
      console.log(this.state.inputValue);
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel onClick={this.props.onClick} />
      </div>
    );
  }
}
