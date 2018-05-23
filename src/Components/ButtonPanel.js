import React from "react";
import Button from "./Button.js";

export default class ButtonPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Button sign="AC" />
        <Button sign="+/-" />
        <Button sign="%" />
        <Button sign="/" /> <br />
        <Button sign="7" />
        <Button sign="8" />
        <Button sign="9" />
        <Button sign="*" /> <br />
        <Button sign="4" />
        <Button sign="5" />
        <Button sign="6" />
        <Button sign="-" /> <br />
        <Button sign="1" />
        <Button sign="2" />
        <Button sign="3" />
        <Button sign="+" /> <br />
        <Button sign="0" />
        <Button sign="," />
        <Button sign="=" /> <br />
      </div>
    );
  }
}
