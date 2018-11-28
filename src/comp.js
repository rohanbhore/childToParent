import React, { Component } from 'react';

import Child from "./child";
export default class ParentClass extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
        this.state = {
            c: 0
        }
        // this.props
    }

    add(a, b) {
        this.setState({

            c: a + b
        })
    }

    render() {
        return (
            <React.Fragment>
                <Child add={this.add} />
                <div>{this.state.c}</div>
            </React.Fragment>

        )
    }
}