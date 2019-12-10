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
    pictures
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <Main>
          {this.state.pictures.map( picture => (
            <Pictures 
              id={picture.id}
              name={picture.name}
              image={picture.image}
              />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;
