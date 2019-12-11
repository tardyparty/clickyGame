import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Main from "./components/main";
// import Wrapper from "./components/wrapper";
import pictures from "./pictures.json";
import Pictures from "./components/picture"

class App extends Component {

  state = {
    pictures: pictures,
    score: 0,
    highscore: 0
  }

  scoreGame = card => {
    if ( !card.clicked ) {
      this.setState({ score: +1});
      card.clicked = true;
    }
    else {
      this.gameOver(this.state.score)
    }
  }

  gameOver = score => {
    if (score > this.state.highscore) {
      this.setState({ highscore: this.state.score});
      this.setState({ score: 0});
      this.state.pictures.map( picture => picture.click = false)
    }
  }

  // Javascript version of the Durstenfeld Shuffle Algorithm
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  }

  render() {

    return (
      <div>
        <Navbar score={4}/>
        <div className="container">
          <Jumbotron/>
          <Main>
            {this.state.pictures.map( picture => (
              <Pictures 
                id={picture.name}
                name={picture.name}
                image={picture.image}
                clicked={picture.clicked}
                onClick={this.shuffleArray(pictures) this.scoreGame()}
                />
            ))}
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
