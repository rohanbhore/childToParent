import React, { Component } from 'react';
// import Child from "./child";
export default class ChildClass extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        // console.log(props);
        // this.props = 2;
        // console.log(this.props);
    //    props.add = 3
    }

    add() {
        this.props.add(2, 3)
    };

    render() {
        return (
            <button onClick={this.add}>Add No.</button>
        );
    }
}