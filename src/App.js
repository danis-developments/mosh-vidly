import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <h1>Welcome to Vidly!</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
