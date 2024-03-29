import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import CastCard from "./components/CastCard";
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";
import Navbar from './components/Navbar';

let score = 0;
let topScore = 0;
let correctly = "Click an image to begin!"
class App extends Component {
  state = {
    cast,
    score,
    topScore,
    correctly
  };

  // shuffle the photos on click
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  resetScore = () => this.setState({ score: 0 });

  resetClicked = (item) => item.lastClicked = false;

  updateScore = () => {
    if(this.state.score >= this.state.topScore) {
      this.setState({ score: this.state.score + 1});
      this.setState({ topScore: this.state.score + 1 })
    } else {
      this.setState({ score: this.state.score + 1});
      this.setState({ topScore: this.state.topScore })
    }
  }


  checkIfClicked = result => {
    if(result.lastClicked) {
      this.resetScore();
      this.setState({ correctly: "You guessed incorrectly!"}
      );
      this.state.cast.map(this.resetClicked);
      this.setState({ cast });
    } else {
      this.updateScore();
      this.setState({ correctly: "You guessed correctly!"})
    };
  }

  markLast = result => {
    console.log(result.lastClicked);
    cast.lastClicked = true;
      for (let i = 0; i < cast.length; i++) {
        if (result.id === cast[i].id) {
          cast[i].lastClicked = true;
          console.log(cast[i].lastClicked);
        }
      }
      this.setState({ cast });
};

render() {
  const shuffledCast = this.shuffleArray(this.state.cast)
  return (
    <div>
      <Navbar
      score={this.state.score}
      topScore={this.state.topScore}
      correctly={this.state.correctly}
      />
      

      <Wrapper>
      {shuffledCast.map(cast => (
        <CastCard 
        checkIfClicked={this.checkIfClicked}
        markLast={this.markLast}
        id={cast.id}
        key={cast.id}
        name={cast.name}
        lastClicked={cast.lastClicked}
        photo={cast.photo}  
        />
        ))}
        </Wrapper>
    </div>
  );
}
}

export default App;
