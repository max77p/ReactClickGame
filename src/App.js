import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Items, Row } from "./components/Items";
import players from "./characters.json";

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.loadCharacs();
  }

  loadCharacs = () => {
    this.setState({ characters: players });
  };

  render() {
    let jasper = null;
    var content = [];
    var count = 4;

    var total = this.state.characters.length;
    var keepcount = total % count;
    console.log("keepcount:" + keepcount);
    {
      this.state.characters.map(x => {
        content.push(<Items characters={x.image} />);
        count--;
        console.log(count);
        if (count == 0) {
          count=4;
          jasper=(
            <Row>
              {content}
            </Row>
          )
        }
      });
    }

    return [
      <header>
        <Nav />
      </header>,
      <main>
        <Card />
        <div className="container">{jasper}</div>
      </main>,
      <footer>
        <Footer />
      </footer>
    ];
  }
}

export default App;
