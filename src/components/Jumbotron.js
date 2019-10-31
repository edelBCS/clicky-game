import React, { Component } from 'react'

export class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid shadow-sm">
                    <div className="container text-center">
                        <h1 className="display-4">Clicky Game</h1>
                        <p className="lead">Done click the same thing twice!!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron
