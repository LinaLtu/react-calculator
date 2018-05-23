import React from "react";

export default class Button extends React.Component {
  constructor() {
    super();

    this.state = { inputValue: "" };

    // this.onClick = this.onClick.bind(this);
  }

  // onClick(e) {
  //   this.setState({ inputValue: this.props.sign }, function() {
  //     console.log(this.state.inputValue);
  //   });
  // }

  render() {
    return <button className={this.props.classes} onClick={this.onClick}>{this.props.sign}</button>;
  }
}
