import React from "react";

export default class Display extends React.Component {
  render() {
    let displayState;
    //checks the current display value and
    //shows the user the latest result or input
    if (this.props.calculatedResult === 0 && this.props.currentInput !== 0) {
      displayState = this.props.currentInput;
    } else if (
      this.props.calculatedResult !== 0 &&
      this.props.currentInput !== 0
    ) {
      displayState = this.props.currentInput;
    } else if (
      this.props.calculatedResult !== 0 &&
      this.props.currentInput === 0
    ) {
      displayState = this.props.calculatedResult.toFixed(1);
    } else {
      displayState = 0;
    }
    return <div className="output">{displayState}</div>;
  }
}
