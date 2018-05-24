import React from "react";

export default class Display extends React.Component {
  render() {
    let displayState;
    //checks the current display value and
    //shows the user the latest result or input
    if (this.props.number === 0 && this.props.inputValue !== 0) {
      displayState = this.props.inputValue;
    } else if (this.props.number !== 0 && this.props.inputValue !== 0) {
      displayState = this.props.inputValue;
    } else if (this.props.number !== 0 && this.props.inputValue === 0) {
      displayState = this.props.number;
    } else {
      displayState = 0;
    }
    return <div className="output">{displayState}</div>;
  }
}
