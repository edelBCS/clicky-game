import React, { Component } from 'react';
import './App.css';
import clickImages from "./clicky-images.json";
import ScoreBar from "./components/ScoreBar";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image";
import Container from './components/Container';
import Row from "./components/Row";
import Alert from "./components/Alert";

export class App extends Component {
  state = {
    score: 0,
    hiScore: 0,
    endScore: 0,
    selectedImgs: [],
    gameover: false,
    clickImages
  }

  // When img is clicked, tests for endgame, otherwise updates state
  handleImgClick = id => {
    if (this.state.selectedImgs.find(imgId => imgId === id)) {
      this.endgame(this.state.score);
    } else {
      this.setState({
        score: this.state.score + 1,
        selectedImgs: [...this.state.selectedImgs, id],
        clickImages: this.shuffle(this.state.clickImages),
        gameover: false
      });
    }    
  };

  // ends each game round and resets score
  endgame = (score) => {
    let newHiScore = (score > this.state.hiScore) ? score : this.state.hiScore;

    this.setState({      
      endScore: this.state.score,
      score: 0,
      hiScore: newHiScore,
      gameover: true,
      selectedImgs: []
    });
  };

  // Randomizes the order of the images
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

    // Displays an image for each object in the JSON data file
    const images = this.state.clickImages.map(image => {
      return <Image imgSrc={image.imageURL} imgAlt={image.name} id={image.id} key={image.id} clickImg={this.handleImgClick}/>;
    });    
    
    return (
      <div>
        <div className="App">
          <ScoreBar score={this.state.score} hiScore={this.state.hiScore}/>
          <Jumbotron />
          <Container classprops="text-center display-4">
            <Alert style={{ opacity: this.state.gameover ? 1 : 0 }} type="success">
              Game Over. {(this.state.endScore === this.state.hiScore)?`New High Score: `: `Score: `}{this.state.endScore}
            </Alert>
          </Container>
          <Container classprops="d-flex justify-content-center">
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

