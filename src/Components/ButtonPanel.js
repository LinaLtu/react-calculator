import React from "react";
import Button from "./Button.js";

export default class ButtonPanel extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Button sign="AC"  />
        <Button sign="+/-" />
        <Button sign="%" />
        <Button sign="/" classes="orange" /> <br />
        <Button sign="7" />
        <Button sign="8" />
        <Button sign="9" />
        <Button sign="*" classes="orange" /> <br />
        <Button sign="4" />
        <Button sign="5" />
        <Button sign="6" />
        <Button sign="-" classes="orange" /> <br />
        <Button sign="1" />
        <Button sign="2" />
        <Button onClick={this.props.onClick} sign="3" />
        <Button sign="+" classes="orange" /> <br />
        <Button sign="0" classes="button-50"/>
        <Button sign="," />
        <Button sign="=" classes="orange" /> <br />
      </div>
    );
  }
}
