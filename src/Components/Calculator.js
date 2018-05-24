import React from "react";
import Button from "./Button.js";
import Display from "./Display.js";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0,
      number: 0,
      operator: "="
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleNumberClick(value) {
    let inputBuffer;

    if (this.state.inputValue === 0) {
      inputBuffer = value;
    } else {
      inputBuffer = this.state.inputValue + value;
    }
    this.setState({ inputValue: parseInt(inputBuffer) }, function() {
      console.log(inputBuffer);
      //console.log(this.state.inputValue);
    });
  }

  handleOperatorClick(value) {
    let number = this.state.number;
    let finalInputValue = 0;

    if (value === "AC") {
      number = 0;
      value = "=";
    } else if (value === "+/-") {
      finalInputValue = this.state.inputValue * -1;
      number = finalInputValue;
    } else if (this.state.operator !== "=") {
      switch (this.state.operator) {
        case "+":
          number += this.state.inputValue;
          console.log(number);
          console.log(this.state.inputValue);
          break;
        case "-":
          number -= this.state.inputValue;
          break;
        case "*":
          number *= this.state.inputValue;
          break;
        case "/":
          number /= this.state.inputValue;
          break;
        case "%":
          number = number / 100 * this.state.inputValue;
          break;
      }
    } else if (this.state.inputValue !== 0) {
      number = this.state.inputValue;
    }

    this.setState({
      inputValue: finalInputValue,
      operator: value,
      number: number
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          inputValue={this.state.inputValue}
          number={this.state.number}
          operator={this.state.operator}
        />
        <Button handleClick={this.handleOperatorClick} sign="AC" />
        <Button handleClick={this.handleOperatorClick} sign="+/-" />
        <Button handleClick={this.handleOperatorClick} sign="%" />
        <Button
          handleClick={this.handleOperatorClick}
          sign="/"
          classes="orange"
        />{" "}
        <br />
        <Button handleClick={this.handleNumberClick} sign="7" />
        <Button handleClick={this.handleNumberClick} sign="8" />
        <Button handleClick={this.handleNumberClick} sign="9" />
        <Button
          handleClick={this.handleOperatorClick}
          sign="*"
          classes="orange"
        />{" "}
        <br />
        <Button handleClick={this.handleNumberClick} sign="4" />
        <Button handleClick={this.handleNumberClick} sign="5" />
        <Button handleClick={this.handleNumberClick} sign="6" />
        <Button
          handleClick={this.handleOperatorClick}
          sign="-"
          classes="orange"
        />{" "}
        <br />
        <Button handleClick={this.handleNumberClick} sign="1" />
        <Button handleClick={this.handleNumberClick} sign="2" />
        <Button handleClick={this.handleNumberClick} sign="3" />
        <Button
          handleClick={this.handleOperatorClick}
          sign="+"
          classes="orange"
        />{" "}
        <br />
        <Button
          handleClick={this.handleNumberClick}
          sign="0"
          classes="button-50"
        />
        <Button handleClick={this.handleNumberClick} sign="," />
        <Button
          handleClick={this.handleOperatorClick}
          sign="="
          classes="orange"
        />{" "}
        <br />
      </div>
    );
  }
}
