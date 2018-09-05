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
      wasclicked: [1,4]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    var resetgame = false;
    console.log(id);
    // console.log(...this.state.wasclicked);
    if (!this.state.wasclicked.includes(id)) {
      this.correctSelection();
    } else {
      resetgame = true;
    }
    if (resetgame) {
      this.incorrectSelection();
    }
  };

  correctSelection = () => {
    if (this.state.score + 1 === this.state.topScore) {
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
    }
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
  };

  incorrectSelection = () => {
    this.setState({ score: 0, message: "You guessed incorrectly!", characters:this.shuffle(players)});

  };

  shuffle = (array) => {

    for(var i=array.length-1;i>0;i--){
      var j=Math.floor(Math.random() * (i+1));
      var temp=array[i];
      array[i]=array[j];
      array[j]=temp
    }
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
