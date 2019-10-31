import React, { Component } from 'react'

export class Image extends Component {
    
    render() {

        return (
            <div className="col-3 my-2">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} className="img-thumbnail clickyImg" onClick={() => this.props.clickImg(this.props.imgID)}></img>
            </div>
        )
    }
}

export default Image
