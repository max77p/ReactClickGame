import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      [
        <header>
          <Nav/>
        </header>,
        <main>
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
