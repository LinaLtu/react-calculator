import React from 'react';

export default class Display extends React.Component {
    render() {
        return (
            <div className="output">
                <div>{this.props.number}</div>
                <div>{this.props.operator}</div>
                <div>{this.props.inputValue}</div>
            </div>
        );
    }
}
