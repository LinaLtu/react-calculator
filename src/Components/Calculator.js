import React from "react";
import Button from "./Button.js";
import Display from "./Display.js";

export default class Calculator extends React.Component {

  constructor() {
    super();

    this.state = { inputValue: 0 , inputBuffer:""};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if(this.state.inputValue===0){
      var inputBuffer;
      inputBuffer=value;
    }else{
      inputBuffer=this.state.inputValue+value;
    }
    this.setState({ inputValue: inputBuffer }, function() {
      console.log(inputBuffer);
      console.log(this.state.inputValue);
    });

  }

  render() {
    return (
      <div className="calculator">
        <Display inputValue={this.state.inputValue} />
        <Button handleClick={this.handleClick} sign="AC" />
        <Button handleClick={this.handleClick} sign="+/-" />
        <Button handleClick={this.handleClick} sign="%" />
        <Button handleClick={this.handleClick} sign="/" classes="orange" />{" "}
        <br />
        <Button handleClick={this.handleClick} sign="7" />
        <Button handleClick={this.handleClick} sign="8" />
        <Button handleClick={this.handleClick} sign="9" />
        <Button handleClick={this.handleClick} sign="*" classes="orange" />{" "}
        <br />
        <Button handleClick={this.handleClick} sign="4" />
        <Button handleClick={this.handleClick} sign="5" />
        <Button handleClick={this.handleClick} sign="6" />
        <Button handleClick={this.handleClick} sign="-" classes="orange" />{" "}
        <br />
        <Button handleClick={this.handleClick} sign="1" />
        <Button handleClick={this.handleClick} sign="2" />
        <Button handleClick={this.handleClick} sign="3" />
        <Button handleClick={this.handleClick} sign="+" classes="orange" />{" "}
        <br />
        <Button handleClick={this.handleClick} sign="0" classes="button-50" />
        <Button handleClick={this.handleClick} sign="," />
        <Button handleClick={this.handleClick} sign="=" classes="orange" />{" "}
        <br />
      </div>
    );
  }
}
