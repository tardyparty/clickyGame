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
    pictures,
    score: 0,
    highscore: 0
  }

  scoreGame = picture => {

    console.log("scoreGame called");
    
    if ( !picture.clicked ) {
      this.setState({ score: this.state.score + 1});
      picture.clicked = true;
      // this.shuffleArray(this.state.pictures);
      console.log(picture.clicked)
    }
    else {
      console.log("gameOver called");
      this.gameOver();
    }
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
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
    // this.setState({ pictures: array })
  }

  showCards = () => {
   console.log("hi")
  }

  render() {

    return (
      <div>
        <Navbar score={this.state.score} highscore={this.state.highscore}/>
        <div className="container">
          <Jumbotron/>
          <Main>
            {/* {this.shuffleArray(pictures)} */}
            {this.state.pictures.map( picture => (
              <Pictures 
                key={picture.name}
                name={picture.name}
                image={picture.image}
                clicked={picture.clicked}
                clickEvent={()=> this.scoreGame(picture)}
                />
            ))}
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
