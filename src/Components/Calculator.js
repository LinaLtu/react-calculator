import React from "react";
import Button from "./Button.js";
import Display from "./Display.js";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: 0,
      calculatedResult: 0,
      operator: "=",
      isCommaAdded: false
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleNumberClick(value) {
    let inputBuffer = "";
    if (value === ".") {
      this.setState({ isCommaAdded: true });
    }
    if (this.state.isCommaAdded === true && value == ".") {
      // console.log("This is true");
      // inputBuffer = this.state.currentInput;
      value = "";
      // this.setState({ isCommaAdded: false });
    } else {
      //
    }

    if (this.state.currentInput === 0) {
      inputBuffer = value;
    } else {
      inputBuffer = this.state.currentInput + value;
      console.log(inputBuffer);
    }

    console.log(this.state.isCommaAdded);
    this.setState({ currentInput: inputBuffer });
  }

  handleOperatorClick(value) {
    let calculatedResult = parseFloat(this.state.calculatedResult);
    let finalInputValue = 0;
    let parsedCurrentInput = parseFloat(this.state.currentInput);

    if (value === "AC") {
      calculatedResult = 0;
      value = "=";
    } else if (value === "+/-") {
      if (this.state.currentInput != 0) {
        finalInputValue = parsedCurrentInput * -1;
      } else {
        finalInputValue = calculatedResult * -1;
      }
      calculatedResult = finalInputValue;
    } else if (this.state.operator !== "=") {
      if (this.state.currentInput == 0) {
        calculatedResult = parsedCurrentInput;
      }
      switch (this.state.operator) {
        case "+":
          calculatedResult += parsedCurrentInput;
          console.log(calculatedResult);
          console.log(this.state.currentInput);
          break;
        case "-":
          calculatedResult -= parsedCurrentInput;
          break;
        case "*":
          calculatedResult *= parsedCurrentInput;
          break;
        case "/":
          calculatedResult /= parsedCurrentInput;
          break;
        case "%":
          calculatedResult = calculatedResult / 100 * parsedCurrentInput;
          break;
      }
    } else if (this.state.currentInput !== 0) {
      calculatedResult = parsedCurrentInput;
    }

    this.setState({
      currentInput: finalInputValue,
      operator: value,
      calculatedResult: calculatedResult,
      isCommaAdded: false
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          currentInput={this.state.currentInput}
          calculatedResult={this.state.calculatedResult}
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
        <Button handleClick={this.handleNumberClick} sign="." />
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
