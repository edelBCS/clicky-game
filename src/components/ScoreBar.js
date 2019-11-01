import React, { Component } from 'react'
import Container from "./Container"

export class ScoreBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light shadow-sm">
                    <Container>
                        <h3 className="col-4">Clicky Game</h3>
                        <h3 className="col-4">Click an image to begin!</h3>
                        <h3 className="col-4">Score: {this.props.score} | Total Score: {this.props.hiScore}</h3>
                    </Container>
                </nav>
            </div>
        )
    }
}

export default ScoreBar
