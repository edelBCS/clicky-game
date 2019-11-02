import React, { Component } from 'react'

export class FlexCenter extends Component {
    render() {
        return (
            <div className={`d-flex justify-content-center`} {...this.props} />
        )
    }
}

export default FlexCenter
