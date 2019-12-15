import React, { Component } from 'react';
import CastCard from "./components/CastCard";
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";


class App extends Component {
  state = {
    cast
  };

  markLast = result => {
    console.log(result.lastClicked);
    console.log(this.cast.lastClicked);
    cast.lastClicked = true;
      
      console.log(cast.lastClicked);
      this.setState({ cast });
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
