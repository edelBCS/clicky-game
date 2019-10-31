import React, { Component } from 'react'

export class Row extends Component {
    render() {
        return (
            <div className={`row${this.props.fluid ? "-fluid" : ""}`} {...this.props} />
        )
    }
}

export default Row
