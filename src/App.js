import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Items, Row } from "./components/Items";
import players from "./characters.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: players,
      score: 0,
      topScore: 0,
      message: "Click an image to begin!",
      wasclicked: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    let resetgame = false;
    console.log("clicked id is:" + id);
    // console.log(...this.state.wasclicked);
    this.setState(prevState => {
      return {
        wasclicked: [...prevState.wasclicked, id]
      };
    });
    if (!this.state.wasclicked.includes(id)) {
      //if clicked image is not already clicked
      this.correctSelection();
      console.log(this.state.wasclicked);
    } else {
      resetgame = true;
    }
    if (resetgame) {
      this.incorrectSelection();
    }
  };

  correctSelection = prevState => {
    if (this.state.score + 1 === this.state.topScore) {
      this.setState((prevState, props) => {
        return {
          score: prevState.score + 1,
          message: "You guessed correctly!",
          characters: this.shuffle(players)
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          score: prevState.score + 1,
          message: "You guessed correctly!",
          characters: this.shuffle(players)
        };
      });
    }
    if (this.state.score + 1 > this.state.topScore) {
      this.setState((prevState, props) => {
        return {
          topScore: prevState.topScore + 1,
          characters: this.shuffle(players)
        };
      });
    }
  };

  incorrectSelection = () => {
    this.setState((prevState, props) => {
      return {
        score: 0,
        message: "You guessed incorrectly!",
        characters: this.shuffle(players),
        wasclicked:[]
      };
    });
  };

  shuffle = array => {
    var temp;
    array.map((x, index) => {
      var random = Math.floor(Math.random() * array.length);
      temp = x;
      array[index] = array[random];
      array[random] = temp;
    });
    console.log(array);
    return array;
  };
  // componentDidMount() {
  //   this.loadCharacs();
  // }

  // loadCharacs = () => {
  //   this.setState({ characters: players });
  // };

  render() {
    let jasper = null;
    var content = [];
    var count = 4;

    var total = this.state.characters.length;
    var keepcount = total % count;
    console.log("keepcount:" + keepcount);
    {
      this.state.characters.map(x => {
        content.push(
          <Items
            characters={x.image}
            id={x.id}
            key={x.id}
            onClick={this.handleClick}
          />
        );
        count--;
        // console.log(count);
        if (count == 0) {
          count = 4;
          jasper = <Row>{content}</Row>;
        }
      });
    }

    return [
      <header>
        <Nav
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          onClick={this.resetGame}
        />
      </header>,
      <main>
        <Card />
        <div className="container itemsWrapper">{jasper}</div>
      </main>,
      <footer>
        <Footer />
      </footer>
    ];
  }
}

export default App;
