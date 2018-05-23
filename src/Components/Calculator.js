import React from "react";
import Button from "./Button.js";
import Display from "./Display.js";

export default class Calculator extends React.Component {

  constructor() {
    super();
    this.state = { inputValue: 0 , inputBuffer:""};
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleNumberClick(value) {
    if(this.state.inputValue===0){
      var inputBuffer;
      inputBuffer=value;
    }else{
      inputBuffer=this.state.inputValue+value;
    }
    this.setState({ inputValue: inputBuffer }, function() {
      console.log(inputBuffer);
      //console.log(this.state.inputValue);
    });

  }

  handleOperatorClick(value) {
    if(this.state.inputValue===0){
      var inputBuffer;
      inputBuffer=value;
    }else{
      inputBuffer=this.state.inputValue+value;
    }
    this.setState({ inputValue: inputBuffer }, function() {
      console.log(inputBuffer);
      //console.log(this.state.inputValue);
    });

  }

  render() {
    return (
      <div className="calculator">
        <Display inputValue={this.state.inputValue} />
        <Button handleOperatorClick={this.handleOperatorClick} sign="AC" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="+/-" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="%" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="/" classes="orange" />{" "}
        <br />
        <Button handleNumberClick={this.handleNumberClick} sign="7" />
        <Button handleNumberClick={this.handleNumberClick} sign="8" />
        <Button handleNumberClick={this.handleNumberClick} sign="9" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="*" classes="orange" />{" "}
        <br />
        <Button handleNumberClick={this.handleNumberClick} sign="4" />
        <Button handleNumberClick={this.handleNumberClick} sign="5" />
        <Button handleNumberClick={this.handleNumberClick} sign="6" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="-" classes="orange" />{" "}
        <br />
        <Button handleNumberClick={this.handleNumberClick} sign="1" />
        <Button handleNumberClick={this.handleNumberClick} sign="2" />
        <Button handleNumberClick={this.handleNumberClick} sign="3" />
        <Button handleOperatorClick={this.handleOperatorClick} sign="+" classes="orange" />{" "}
        <br />
        <Button handleNumberClick={this.handleNumberClick} sign="0" classes="button-50" />
        <Button handleNumberClick={this.handleNumberClick} sign="," />
        <Button handleOperatorClick={this.handleOperatorClick} sign="=" classes="orange" />{" "}
        <br />
      </div>
    );
  }
}
