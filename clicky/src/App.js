import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Main from "./components/main";
// import Wrapper from "./components/wrapper";
import pictures from "./pictures.json";
import Pictures from "./components/picture";
import Footer from "./components/footer";

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    pictures,
    score: 0,
    highscore: 0,
    status: "Click!"
  }
  this.baseState = this.state
}


  scoreGame = picture => {

    console.log("scoreGame called");
    
    if ( !picture.clicked ) {
      this.setState({ score: this.state.score + 1});
      picture.clicked = true;
      this.shuffleArray(this.state.pictures);
      this.setState({ status: "Click Again!"});
      console.log(picture.clicked)
    }
    else {
      console.log("gameOver called");
      this.setState({ status: "Game Over :("})
      this.shuffleArray(this.state.pictures)
      this.gameOver();
    }
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score});
    }
    this.setState({ score: 0});
    this.setState({ pictures: pictures.map( picture => {
        picture.clicked = false;
        return picture
    })});
    this.shuffleArray(this.state.pictures);
  }

  // Javascript version of the Durstenfeld Shuffle Algorithm
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    this.setState({ pictures: array })
  }

  render() {

    return (
      <div>
        <Navbar status={this.state.status} score={this.state.score} highscore={this.state.highscore}/>
        <div className="container">
          <Jumbotron/>
          <Main>
            {/* {this.shuffleArray(pictures)} */}
            {this.state.pictures.map( picture => (
              <Pictures 
              picture={picture}
              key={picture.name}
              name={picture.name}
              image={picture.image}
              clicked={picture.clicked}
              clickFn={this.scoreGame}
              />
            ))}
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
