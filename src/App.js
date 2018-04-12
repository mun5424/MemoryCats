import React, { Component } from 'react';
import Avatar from "./components/Avatar.js";
import Navbar from "./components/Navbar.js";
import cats from "./cats.json";
import './App.css';

class App extends Component {

  state = {
    cats: cats,
    score: 0,
    topScore: 0,
    clickedCats: [],
    statusMessage: ""
  }

  clickedCat = (id) => {
    const [pageBody] = document.getElementsByTagName('body');
    if (this.state.clickedCats.includes(id)) {
      //clicked a cat thats already been clicked 
      this.setState({ score: 0, clickedCats: [] });

      //shake screen.
      pageBody.classList.add('shakeWrapper')
      this.setState({ statusMessage: "You guessed incorrectly!" })
      setTimeout(() => { pageBody.classList.remove('shakeWrapper'); }, 400);
      setTimeout(() => { this.setState({ statusMessage: "" }) }, 2000)
    }
    else {//clicked a cat thats not been clicked. tally score. 
      this.setState({ clickedCats: [...this.state.clickedCats, id] });
      this.setState({ statusMessage: "You guessed correctly!" })
      this.setState({ score: this.state.score + 1 });

      if (this.state.score >= this.state.topScore)
        this.setState({ topScore: this.state.topScore + 1});

      if (this.state.score === 11) {
        this.setState({ footerText: 'You win! Click on any cat to play again!' })
        this.setState({ score: 0, clickedCats: [], cats: cats })
        setTimeout(() => {this.setState({ statusMessage: '' })}, 2000)

      }
    }
  }

  shuffleCats = array => {
      let current = array.length; 

      while (current > 0) {
        let index = Math.floor(Math.random() * current);
        current--;
        let temp = array[current];
        array[current] = array[index];
        array[index] = temp;
      }
      this.setState({cats});
    };

    renderCats = (array) => {
      return this.state.cats.map(cat => (
        <Avatar
          id={cat.id}
          key={cat.id}
          image={cat.image}
          shuffleCats={() => {this.shuffleCats(this.state.cats)} }
          clickedCat={() => {this.clickedCat(cat.id)} }
        />
      ))
    };

    render() {
      return (
        <div className="App">
          <Navbar statusMessage={this.state.statusMessage} score={this.state.score} topScore={this.state.topScore}/>
          <header className="App-header">
            <h1 className="App-title">Memory Game</h1>
            <p className="App-intro">
              Click on a cat to earn points, but dont click on any more than once!
        </p>
          </header>

        <div className="container row">
          {this.renderCats(this.state.cats)}
        </div>

        </div>
      );
    }
  }

  export default App;
