import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Main from "./components/main";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Jumbotron/>
      <Main/>
    </Wrapper>
  );
}

export default App;
