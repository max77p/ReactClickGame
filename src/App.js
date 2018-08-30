import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      [
        <header>
          <Nav/>
        </header>,
        <main>
          <Card/>
          <p></p>
        </main>,
        <footer>
          <Footer/>
        </footer>
      ]
      );
  }
}

export default App;
