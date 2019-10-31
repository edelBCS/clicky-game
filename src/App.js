import React, { Component } from 'react';
import './App.css';
import clickImages from "./clicky-images.json";
import ScoreBar from "./components/ScoreBar";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image";
import Container from './components/Container';
import Row from "./components/Row";

export class App extends Component {
  state = {
    score: 0,
    totalScore: 0,
    selectedImgs: [],
    clickImages
  }

  handleImgClick = id => {
    //Check if images has already been selected
    //If no add imgID to selectedImgs else end game
    //add 1 to score
    //scamble images
    this.setState({
      clickImages: this.shuffle(this.state.clickImages)
    });
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {

    const images = this.state.clickImages.map(image => {
      return <Image imgSrc={image.imageURL} imgAlt={image.name} imgID={image.id} clickImg={this.handleImgClick}/>;
    });    
    
    return (
      <div>
        <div className="App">
          <ScoreBar score={this.state.score} totalScore={this.state.totalScore}/>
          <Jumbotron />
          <Container classProps="d-flex justify-content-center">
            <Row>
              {this.shuffle(images)}
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default App

