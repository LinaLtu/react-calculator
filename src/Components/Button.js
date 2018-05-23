import React from "react";

export default class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <button>{this.props.sign}</button>;
  }
}
