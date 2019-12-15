import React, { Component } from 'react';
import CastCard from "./components/CastCard";
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";

let score = 0;
class App extends Component {
  state = {
    cast,
    score
  };

  updateScore = () => {
    this.setState({ score: this.state.count + 1});
  }

  markLast = result => {
    console.log(result.lastClicked);
    cast.lastClicked = true;
      
      console.log(cast);
      // this.setState({ cast });
};

render() {

  return (
    <div>
      <Wrapper>

      {this.state.cast.map(cast => (
        <CastCard 
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
